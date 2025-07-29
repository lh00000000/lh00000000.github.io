console.log('Blog script starting...');

// Global variables
let allPosts = []
let allTags = []
let enabledTags = new Set() // Tags that are currently enabled by default
let disabledTags = new Set() // Tags that are currently disabled

// Configuration for default tag states
// Tags in disabledByDefault will be disabled initially
// Tags not in this list will be enabled by default
const disabledByDefault = new Set([
  '#itp', 
  "#itpthesis",
  "#js"
])

// Load posts from pre-built static files
async function loadPosts() {
  try {
    // Try to load from the pre-built posts.json file (fastest)
    console.log('Loading posts from pre-built data');
    const response = await fetch('./dist/api/posts00000000.json');
    if (response.ok) {
      allPosts = await response.json();
      allTags = _(allPosts).chain().flatMap("tags").uniq().value();
      
      // Initialize tag states based on configuration
      allTags.forEach(tag => {
        if (disabledByDefault.has(tag)) {
          disabledTags.add(tag);
        } else {
          enabledTags.add(tag);
        }
      });
      
      console.log(`Loaded ${allPosts.length} posts from pre-built data`);
      update();
      return;
    }
  } catch (error) {
    console.error('Failed to load pre-built posts:', error);
    console.warn('Failed to load pre-built posts, falling back to dynamic scan');
  }
}

// Toggle a tag's state
function toggleTag(tag) {
  if (enabledTags.has(tag)) {
    enabledTags.delete(tag);
    disabledTags.add(tag);
  } else {
    disabledTags.delete(tag);
    enabledTags.add(tag);
  }
  update();
}

// Check if a post should be visible based on current tag filters
function isPostVisible(post) {
  // If no tags are enabled, show all posts
  if (enabledTags.size === 0) {
    return false;
  }
  
  // A post is visible if it has at least one enabled tag
  return post.tags.some(tag => enabledTags.has(tag));
}

const reset = () => {
  Array.from(document.querySelectorAll(".posts .list .post")).forEach(child => child.remove())
  Array.from(document.querySelectorAll(".tags .list .tag-toggle")).forEach(child => child.remove())
}

const update = () => {
  reset()

  // Get visible posts based on current tag filters
  const visiblePosts = allPosts.filter(post => isPostVisible(post))
  const hiddenPosts = allPosts.filter(post => !isPostVisible(post))


  // Render visible posts
  visiblePosts.forEach((post, i, all) => {
    let span = document.createElement("span")
    span.setAttribute("class", "post")
    
    let a = document.createElement("a")
    a.href = post.href

    let labelText = post.hasOwnProperty("label") ? post.label : post.href
    let aContent = (
      document
        .createTextNode(`${labelText} ${post.tags.join(" ")}`)
    )
    a.appendChild(aContent)

    if (i != 0) {
      span.appendChild(document.createTextNode(", "))
    }
    span.appendChild(a)
    document.querySelector(".posts .list").appendChild(span)
  })

  // Render tag toggles
  allTags.forEach((tag, i, all) => {
    let span = document.createElement("span")
    span.setAttribute("class", "tag-toggle")
    
    // Set the appropriate class based on current state
    if (enabledTags.has(tag)) {
      span.classList.add("enabled")
    } else {
      span.classList.add("disabled")
    }
    
    // Add click handler
    span.addEventListener("click", () => toggleTag(tag))
    
    // Add tag text
    span.appendChild(document.createTextNode(tag))
    
    document.querySelector(".tags .list").appendChild(span)
  })

  // Add ALL/NONE buttons
  let allButton = document.createElement("span")
  allButton.setAttribute("class", "tag-toggle all-none-toggle")
  allButton.classList.add("enabled")
  allButton.appendChild(document.createTextNode("ALL"))
  allButton.addEventListener("click", () => {
    // Enable all tags
    allTags.forEach(tag => {
      enabledTags.add(tag)
      disabledTags.delete(tag)
    })
    update()
  })
  document.querySelector(".tags .list").appendChild(allButton)

  let noneButton = document.createElement("span")
  noneButton.setAttribute("class", "tag-toggle all-none-toggle")
  noneButton.classList.add("enabled")
  noneButton.appendChild(document.createTextNode("NONE"))
  noneButton.addEventListener("click", () => {
    // Disable all tags
    allTags.forEach(tag => {
      disabledTags.add(tag)
      enabledTags.delete(tag)
    })
    update()
  })
  document.querySelector(".tags .list").appendChild(noneButton)
}

console.log('Script loaded, waiting for document ready...');

// Try jQuery first, fallback to vanilla JS
if (typeof $ !== 'undefined') {
  $(document).ready(function() {
    console.log('Document ready (jQuery), calling loadPosts...');
    loadPosts();
  });
} else {
  console.log('jQuery not available, using vanilla JS...');
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      console.log('Document ready (vanilla JS), calling loadPosts...');
      loadPosts();
    });
  } else {
    console.log('Document already ready, calling loadPosts...');
    loadPosts();
  }
}
