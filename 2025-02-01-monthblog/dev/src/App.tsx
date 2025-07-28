import React from 'react'
import './style.css'
import BlogEntryCard from './components/BlogEntryCard'

// TypeScript interface for the blog entry structure
interface BlogEntry {
  id: number
  date: string
  caption: string
  image: string
  hasImage: boolean
  isVideo?: boolean
}

function App() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', fontFamily: 'monospace' }}>
      <header style={{ 
        textAlign: 'left', 
        padding: '1rem', 
        borderBottom: '2px solid #fff',
        backgroundColor: '#111'
      }}>
        <h1 style={{ 
          margin: '0', 
          fontSize: '2rem', 
          color: '#fff',
          textTransform: 'uppercase',
          letterSpacing: '2px'
        }}>
          blog 2025-06
        </h1>
        <p style={{ 
          margin: '0.5rem 0 0 0', 
          fontSize: '0.9rem', 
          color: '#ccc',
          textTransform: 'uppercase'
        }}>
          testvite
        </p>
      </header>
      
      <main style={{ 
        padding: '1rem',
        backgroundColor: '#000'
      }}>
        <div style={{ 
        }}>
          <h2 style={{ 
            margin: '0 0 1rem 0', 
            color: '#fff',
            textTransform: 'uppercase',
            fontSize: '1.2rem',
            borderBottom: '1px solid #fff',
            paddingBottom: '0.5rem'
          }}>
            Entries (49 total)
          </h2>
          <div style={{ 
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '0.5rem',
            lineHeight: '1.2'
          }}>
            <BlogEntryCard entry={{
              id: 1,
              date: "2025-02-01",
              caption: "volunteering w saleh on randall's island",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-01-IMG_8422-3F1D7E4F-7F4D-416C-95D4-A35F34682545",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 2,
              date: "2025-02-01",
              caption: "lunar new year w da crew",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-02-IMG_6760-8B82BE0D-1CCB-4813-B23A-E456E8758C20",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 3,
              date: "2025-02-02",
              caption: "open jam at sunset stoop",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-03-IMG_6824-5E4E7A55-DF99-45A8-B4A5-676C21B9D371",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 5,
              date: "2025-02-04",
              caption: "amanda doing a reading at pete's candy store",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-06-IMG_6855-F70B175B-A4AD-443F-8BB2-8286472B2E1D",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 6,
              date: "2025-02-05",
              caption: "did arrangement of anthems for a 17 yo girl bc i proposed a tenor ensemble today",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-06-IMG_6870-282126D1-2204-4F2B-985E-0E6EE9DBE192",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 7,
              date: "2025-02-06",
              caption: "finally put my plants into drainage containers today",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-06-IMG_6881-3647912B-003D-42FB-A1BA-0E9329A62217",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 8,
              date: "2025-02-07",
              caption: "alena spangler at the owl. text to friends: wow just gotta share: just saw a lady from a band i liked so much in 2016 that i used to have dreams about them announcing they were doing a reunion show and then i would wake up really sad. now i am feeling #inspired to get back on that #grindset",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-07-IMG_6895-A00D580B-7560-4325-8918-59AF6E296558",
              hasImage: true,
              isVideo: true
            }} />
            
            <BlogEntryCard entry={{
              id: 9,
              date: "2025-02-07",
              caption: "jammed w tushar then wired up water pump while adding svg changes to workout",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-08-IMG_6934-B888C34A-452D-4430-A190-1ECC2897D0B3",
              hasImage: true,
              isVideo: true
            }} />
            
            <BlogEntryCard entry={{
              id: 10,
              date: "2025-02-08",
              caption: "mccarren morning run for week 6 w saleh",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-08-IMG_6949-2C825EF0-6A3C-4C5A-87FE-1502EAD238F1",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 11,
              date: "2025-02-08",
              caption: "big snow in sunset park",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-09-IMG_7013-5C00BFB2-E8B2-43CD-A862-065457B73B9F",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 12,
              date: "2025-02-09",
              caption: "sacred harp with seth",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-10-IMG_7039-77AA2042-EFF8-4B66-AC08-39BFC6B0326F",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 13,
              date: "2025-02-09",
              caption: "sunset park w seth",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-10-IMG_7042-C1010D82-A5D8-442A-A541-9ED3BC47DD30",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 14,
              date: "2025-02-09",
              caption: "radio show at jalopy",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-10-IMG_7065-0172BAEA-106D-4792-8EC4-4E8361524E2B",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 16,
              date: "2025-02-10",
              caption: "stayed too long at judy's then went to diner",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-11-IMG_7102-7C54A87A-6661-4690-BD8E-426B5649EAE2",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 17,
              date: "2025-02-12",
              caption: "not my best work but i like that i have 120v, C8 for grow lights, water, and nylon rope in one bundle here",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-12-IMG_7172-6C5D84A1-F03F-4BD1-B0F5-38C9142CFC2E",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 18,
              date: "2025-02-13",
              caption: "finally raised the shelves for the roomba",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-13-IMG_7180-5CA7581D-0B1A-4C0F-9024-25BF49809E0C",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 19,
              date: "2025-02-13",
              caption: "finally added adapter for tower right lights and swapped tower right and left so the wiring is on the inside",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-13-IMG_7183-75B5160A-69B3-465D-A685-DB2B874AF37C",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 20,
              date: "2025-02-13",
              caption: "raised shelves to let the roomba under. feels good",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-13-IMG_7185-8747EA64-331A-4110-ABA3-EBC4B704A9F8",
              hasImage: true,
              isVideo: true
            }} />
            
            <BlogEntryCard entry={{
              id: 22,
              date: "2025-02-14",
              caption: "wrote riffs for acoustic clarity today",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-14-IMG_7221-C2E4E162-16C3-4F5C-891B-A1F4C24D9CF8",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 23,
              date: "2025-02-14",
              caption: "wrote jubilee today",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-14-IMG_4599-47B17676-BCAD-469F-A5DC-156D4B93376F",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 24,
              date: "2025-02-15",
              caption: "singletine night at peking duck house then asia roma and boho for karaoke",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-15-IMG_7228-44B7430C-0292-4D97-82B5-772E399A9B9C",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 25,
              date: "2025-02-15",
              caption: "pills",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-15-IMG_7253-2A326A34-A157-4968-951C-E15BBB7A1C8B",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 26,
              date: "2025-02-16",
              caption: "parade",
              image: "https://lh00000000-public.s3.us-west-2.amazonaws.com/iosupload/2025-02-16-IMG_7270-B6143634-D270-4D78-9BCA-84824251AE3D",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 27,
              date: "2025-02-17",
              caption: "installed new guitar hook and moved harp hook.",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-17-IMG_7307-77C676D0-B4E1-4637-AA75-B9FF91F35722",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 28,
              date: "2025-02-17",
              caption: "hungry but at least i have my beautiful apartment",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-17-IMG_7316-E9A611AC-5E1A-4A7B-8BAB-0856A62E5BC1",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 29,
              date: "2025-02-17",
              caption: "cutting hemp for microgreens",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-17-IMG_7313-0722B7F7-A5BC-465D-837E-669365B0F111",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 30,
              date: "2025-02-18",
              caption: "jammed w tushar. filter sweeps over drum tracks",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-18-IMG_7348-54CD9FE0-29BB-464D-800A-2EC627118FCC",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 31,
              date: "2025-02-18",
              caption: "gave up on sidebar in favor of floating menu in obsidian",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-18-IMG_7349-EADC2B27-37B4-4F69-AFAF-8ED01528EEFE",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 32,
              date: "2025-02-19",
              caption: "played rust and jubilee last night",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-19-IMG_7367-5205AC42-3823-4568-B059-84C80DADCF6D",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 33,
              date: "2025-02-11",
              caption: "stayed in internet and coffee and made arrangement of anthems for a seventeen year old girl",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-19-IMG_7120-C5DAECA5-7768-4F81-8719-B3CCAE9DA560",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 34,
              date: "2025-02-11",
              caption: "played faraday and firecracker at owl tonight.",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-19-IMG_7128-1848D1D0-FB5B-4991-8AE2-466C1BD17C57",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 35,
              date: "2025-02-20",
              caption: "matt'sbday dinner",
              image: "https://lh00000000-public.s3.us-west-2.amazonaws.com/iosupload/2025-02-20-IMG_7382-1EA35C6A-7AE5-45B7-9E3C-FCCE00DE569C",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 36,
              date: "2025-02-20",
              caption: "filing a channel to use as pad for clamp bottle opener",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-20-IMG_7409-EF1A49BA-25BF-44FA-AC61-FA6BE68596EC",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 37,
              date: "2025-02-20",
              caption: "working on acoustic version of clarity",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-20-IMG_7406-4BD64708-A5D1-43D8-9482-D9FC47A8D460",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 38,
              date: "2025-02-20",
              caption: "worked on obsidian plugin today",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-20-IMG_7397-63F9CD69-9310-45AF-A780-5F8192AED672",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 39,
              date: "2025-02-20",
              caption: "yemeni coffee at yafa",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-20-IMG_7387-09DC62F6-A307-475C-A0F3-551E6F952473",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 40,
              date: "2025-02-21",
              caption: "tried to go to trad circle at mary o's but they were filming so i had dinner w diana christian carlos and julie2 bc i didn't want mary o to look bad",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-21-IMG_7420-B028F5AA-8EE8-4980-B7AD-1DD6E7E130E8",
              hasImage: true,
              isVideo: true
            }} />
            
            <BlogEntryCard entry={{
              id: 41,
              date: "2025-02-21",
              caption: "added recording metronomes times and adding of all at the issue and piece view to practice tonight",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-21-IMG_7426-70E0EB02-611E-4FC3-A18D-D88428B395BE",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 42,
              date: "2025-02-21",
              caption: "Finally went back to planting my micro greens after two or three weeks",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-21-IMG_7434-912AEF1D-F36D-485E-9AB2-800817066BD3",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 43,
              date: "2025-02-21",
              caption: "finally upgraded my ender firmware",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-21-IMG_7442-DB2ADCFE-6111-406F-9895-F3EB815CF9F1",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 44,
              date: "2025-02-22",
              caption: "accidentally went to a steakhouse after picking up boxing gloves from cher",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-22-IMG_7463-5EB37E66-9E32-47D0-9BC5-D1656DD9F7A4",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 45,
              date: "2025-02-22",
              caption: "from matt's bday bar crawl",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-22-IMG_7466-E2FE6E78-7EE6-4C33-BDFB-E0EEEF4B37E8",
              hasImage: true,
            }} />
            
            <BlogEntryCard entry={{
              id: 46,
              date: "2025-02-24",
              caption: "confused sichuan for hot pot",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-24-IMG_7482-2892AFC1-1C81-41CE-ACCD-100C21228CDC",
              hasImage: true,
            }} />
            
            <BlogEntryCard entry={{
              id: 47,
              date: "2025-02-24",
              caption: "moonrise, library wines, ba xueyn, panda, and the park today.",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-24-IMG_7493-CA5741EF-80A1-4F51-9FA2-CCCFA0DC7BD6",
              hasImage: true,
            }} />
            
            <BlogEntryCard entry={{
              id: 48,
              date: "2025-02-24",
              caption: "saw raising daughters last NYC show",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-24-IMG_7497-87F8D585-DFEE-4C11-A1B6-2E3F15D041A6",
              hasImage: true,
              isVideo: true
            }} />
            
            <BlogEntryCard entry={{
              id: 49,
              date: "2025-02-25",
              caption: "got weighted vest last night",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-25-IMG_7512-E007D1E7-6EBF-4C51-B5CA-99C0AA6C0C33",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 50,
              date: "2025-02-25",
              caption: "went to a gym for the 3rd time / first time before noon today",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-25-IMG_7537-EB6E7C89-9F3D-44D6-BE36-FCC3E1988ADC",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 51,
              date: "2025-02-25",
              caption: "bedding storage",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-25-IMG_7543-22379E25-45F7-406B-BC7B-337DF688B462",
              hasImage: true
            }} />
            
            <BlogEntryCard entry={{
              id: 52,
              date: "2025-02-27",
              caption: "first day doing the regular sacred harp on wednesday",
              image: "https://lh00000000-public.s3.us-east-1.amazonaws.com/iosupload/2025-02-27-IMG_7592-719FD3D3-9FAD-4E44-92EA-D0B908CA6EBD",
              hasImage: true
            }} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App 