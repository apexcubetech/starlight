export type Chapter = {
  id: string;
  number: number;
  title: string;
  titleTamil: string;
  excerpt: string;
  excerptTamil: string;
  content: string[];
  contentTamil: string[];
};

export const chaptersContent = {
  title: "Chapters",
  titleTamil: "அத்தியாயங்கள்",
  subtitle: "From N. Sathaiah's Note — My Philosophy of Cinema",
  subtitleTamil: "ந. சாத்தையாவின் குறிப்பு — சினிமாவைப் பற்றி நான் நம்புவது",
  preface: {
    title: "Preface — Why I Chose to Write This",
    titleTamil: "முன்னுரை — நான் ஏன் இதை எழுதுகிறேன்?",
    content:
      "I am not here to say anything new about cinema. Cinema is far greater than I am. It is deeper than my own experiences. It is a world I am still learning to understand. What you are about to read is the experience of an observer, the notes of a listener, the reflections of a lover of cinema, and the hopes of someone constantly searching for the next great storyteller.",
    contentTamil:
      "சினிமாவைப் பற்றி புதிதாக எதையும் சொல்ல வரவில்லை. சினிமா என்னைவிட பெரியது. என் அனுபவங்களைவிட ஆழமானது. இங்கு படிப்பது ஒரு பார்வையாளனின் அனுபவம், ஒரு கதை கேட்பவனின் குறிப்புகள், ஒரு திரைப்பட நேசனின் சிந்தனைகள், அடுத்த நல்ல கதை சொல்லியைத் தேடும் ஒருவரின் நம்பிக்கைகள்.",
  },
  chapters: [
    {
      id: "chapter-1",
      number: 1,
      title: "What Cinema Means to Me",
      titleTamil: "சினிமா என்றால் என்ன?",
      excerpt:
        "Cinema is not merely a medium of entertainment. It is an experience that brings people together.",
      excerptTamil:
        "சினிமா என்பது ஒரு பொழுதுபோக்கு ஊடகம் மட்டுமல்ல. அது மனிதர்களை ஒன்றாகக் கூட்டி அமர வைக்கும் ஒரு அனுபவம்.",
      content: [
        "Those audiences are not searching for a star. They are searching for a good story. That truth has captivated me since my childhood.",
        "There is no single audience for Tamil cinema. There are many worlds. Tamil cinema has room for all of these worlds.",
        "The only question that matters: Does the film honestly deliver the experience it set out to create?",
        "What matters is that it is told truthfully, with sincerity. I have always believed that audiences will embrace stories told with honesty.",
        "As long as there are people waiting with hope for a truly good story, Tamil cinema will continue to thrive.",
      ],
      contentTamil: [
        "அவர்கள் நடிகரைத் தேடிச் செல்லவில்லை. ஒரு நல்ல கதையைத் தேடிச் செல்கிறார்கள். அந்த உண்மை, நான் சிறுவனாக இருந்த காலத்திலிருந்தே என்னை ஈர்த்தது.",
        "தமிழ் சினிமாவிற்கு ஒரே ஒரு பார்வையாளர் இல்லை. பல உலகங்கள் இருக்கின்றன. இந்த எல்லா உலகங்களுக்கும் தமிழ் சினிமாவில் இடம் இருக்கிறது.",
        "ஒரு திரைப்படம், அது உருவாக்க நினைத்த அனுபவத்தை பார்வையாளரிடம் உண்மையாகக் கொண்டு சேர்க்கிறதா என்பதுதான் முக்கியம்.",
        "அது உண்மையாகவும் நேர்மையாகவும் சொல்லப்பட்டிருக்க வேண்டும். உண்மையாகச் சொல்லப்பட்ட கதைகளை மக்கள் எப்போதும் ஏற்றுக்கொள்வார்கள் என்று நான் நம்புகிறேன்.",
        "ஒரு நல்ல கதையை எதிர்பார்த்து காத்திருக்கும் பார்வையாளகள் இருக்கும் வரை, தமிழ் சினிமாவும் இருக்கும்.",
      ],
    },
    {
      id: "chapter-2",
      number: 2,
      title: "How I Listen to a Story",
      titleTamil: "நான் ஒரு கதையைக் கேட்ப்பது எப்படி?",
      excerpt:
        "Listening to a story is neither a job nor a mechanical process. It is a moment where experience, knowledge, and intuition come together.",
      excerptTamil:
        "கதையைக் கேட்பது ஒரு வேலை அல்ல. அனுபவம், அறிவு, உணர்வு — இந்த மூன்றும் ஒன்றாக இணையும் தருணம்.",
      content: [
        "It was through director Santhakumar that I received an opportunity at Studio Green under Mr. Gnanavel Raja.",
        "Every new story made me a student all over again. A person who listens to stories must continue learning just as much as the person who tells them.",
        "Whenever I listen to a story, I never begin by asking what genre it belongs to. Instead: Where does this story take me? Do I believe in the world it creates?",
        "I do not sit as a judge. I sit as a member of the audience. I listen as a student. Only then does my experience begin to speak.",
      ],
      contentTamil: [
        "இயக்குநர் சாந்தகுமார் அவர்களின் முயற்சியால்தான் ஸ்டுடியோ கிரீனில் ஞானவேல் ராஜா சாரிடமிருந்து வாய்ப்பு வந்தது.",
        "ஒவ்வொரு புதிய கதையும், என்னை மீண்டும் ஒரு மாணவனாக மாற்றியது. கதை கேட்பவன், கதை சொல்லுபவரைப் போலவே தொடர்ந்து கற்றுக்கொண்டே இருக்க வேண்டும்.",
        "ஒரு கதையைக் கேட்கும்போது, அது எந்த வகையா என்று முதலில் கேட்பதில்லை. அந்தக் கதை என்னை எங்கே அழைத்துச் செல்கிறது? அந்த உலகத்தை நான் நம்புகிறேனா?",
        "நான் ஒரு தீர்ப்பளிப்பவராக அமருவதில்லை. ஒரு பார்வையாளனாக அமர்கிறேன், மாணவனாகக் கேட்கிறேன். அப்போதுதான் என் அனுபவம் பேசத் தொடங்குகிறது.",
      ],
    },
    {
      id: "chapter-3",
      number: 3,
      title: "How I Recognise a Storyteller",
      titleTamil: "ஒரு நல்ல கதை சொல்லியை நான் எப்படி அடையாளம் காண்கிறேன்?",
      excerpt:
        "There is no formula. It comes from experience — years of observing people. I am searching for storytellers, not merely stories.",
      excerptTamil:
        "ஒரு விதி கிடையாது. அது அனுபவம் — மனிதர்களைக் கவனித்த வருடக்கணக்கான அனுபவம். கதைகளை அல்ல, கதை சொல்லிகளைத் தேடுகிறேன்.",
      content: [
        "When I listen to a story, I am also watching the person telling it. Where do they become excited? Where do they hesitate?",
        "Anyone can learn to write a story. But genuine passion for storytelling cannot be performed.",
        "The film was Comali. The young man was Pradeep Ranganathan. I had seen the seed long before success arrived.",
        "A great story may come only once. But a great storyteller will create great stories throughout a lifetime.",
      ],
      contentTamil: [
        "ஒரு கதையைக் கேட்கும்போது, அந்தக் கதையைச் சொல்லும் மனிதரையும் கவனிக்கிறேன். எந்த இடத்தில் உற்சாகப்படுகிறார்? எந்த இடத்தில் தயங்குகிறார்?",
        "ஒரு கதை எழுதக் கற்றுக்கொள்ளலாம். ஆனால், கதை சொல்லிக்குள் இருக்கும் உண்மையான ஈர்ப்பை நடிக்க முடியாது.",
        "அந்த படம் கோமாளி. அந்த இளஞர் பரதீப் ரங்கநாதன். வெற்றி வருவதற்கு முன்பே நான் விதையைப் பார்த்தேன்.",
        "ஒரு நல்ல கதை ஒருமுறை வரலாம். ஆனால், ஒரு நல்ல கதை சொல்லி, வாழ்நாள் முழுவதும் நல்ல கதைகளை உருவாக்குவார்.",
      ],
    },
    {
      id: "chapter-4",
      number: 4,
      title: "What Every Film Has Taught Me",
      titleTamil: "ஒவ்வொரு திரைப்படமும் எனக்குக் கற்றுக்கொடுத்த பாடம்",
      excerpt:
        "Every film has been a classroom. A story told with honesty outlives its time.",
      excerptTamil:
        "ஒவ்வொரு திரைப்படமும் ஒரு வகுப்பறை. உண்மையாகச் சொல்லப்பட்ட கதைகள் காலத்தைத் தாண்டி நிற்கின்றன.",
      content: [
        "From Thanneer Thanneer to Dragon — different eras, connected by one truth: Did it touch people?",
        "Mahaamuni taught me about honesty in writing. Comali and Love Today revealed creators who believe in their own voice.",
        "Oh My Dog reminded me that even the relationship between a boy and a puppy can become memorable cinema.",
        "A story is important. But even more important is how a director chooses to tell it.",
        "Greatness is often decided by the smallest details. That is why, even today, I continue learning.",
      ],
      contentTamil: [
        "தண்ணீர் தண்ணீர் முதல் டிராகன் வரை — வெவ்வேறு காலங்கள், ஒரு உண்மையால் இணைக்கப்பட்டவை: அது மனிதர்களைத் தொட்டதா?",
        "மகாமுனி எழுத்தின் நேர்மையைக் கற்றுக்கொடுத்தது. கோமாளி, லவ் டுடே — தங்கள் குரலில் நம்பிக்கை கொண்ட படைப்பாளிகளை வெளிப்படுத்தின.",
        "ஓ மை டாக் — ஒரு சிறுவனுக்கும் ஒரு நாய்க்கும் இடையிலான உறவும் நல்ல சினிமாவாக மாற முடியும்.",
        "ஒரு கதை முக்கியம். ஆனால் அத보ும் முக்கியமானது, அந்தக் கதையை ஒரு இயக்குநர் எந்த விதத்தில் சொல்கிறார் என்பதுதான்.",
        "மிகச் சிறந்த திரைப்படமாக மாறுவது பல நேரங்களில் மிகச் சிறிய விவரங்களில் தான் இருக்கிறது. அதனால் இன்றும் நான் கற்றுக்கொண்டே இருக்கிறேன்.",
      ],
    },
    {
      id: "chapter-5",
      number: 5,
      title: "The Screenplay: The Foundation of Every Film",
      titleTamil: "திரைக்கதை — ஒரு திரைப்படத்தின் அஸ்திவாரம்",
      excerpt:
        "A screenplay is not a formality. It is the foundation of a film. No time spent refining a screenplay is ever wasted.",
      excerptTamil:
        "திரைக்கதை ஒரு formality அல்ல. அது திரைப்படத்தின் அடித்தளம். திரைக்கதையில் செலவழிக்கப்படும் நேரம் ஒருபோதும் வீணாகாது.",
      content: [
        "When people talk about a film, they usually talk about actors and directors. But before all of that — the screenplay.",
        "If so much thought goes into building a house, how can we begin making a film without giving the same level of thought to its foundation?",
        "Making a film is never an ordinary job. It is a collective responsibility.",
        "A film has always reminded me of childbirth. That is why no time spent refining a screenplay is ever wasted.",
        "A screenplay is an act of respect — to every person who will dedicate their time, talent, and life to making that film.",
      ],
      contentTamil: [
        "திரைப்படத்தைப் பற்றி பேசும்போது, பெரும்பாலும் நடிகர்கள், இயக்குநர்களைப் பற்றிப் பேசுகிறோம். ஆனால் அதற்கு முன் — திரைக்கதை.",
        "ஒரு வீடு கட்ட இவ்வளவு சிந்தனை செலவிடப்பட்டால், அதன் அடித்தளத்திற்கு அதே அளவு சிந்தனை இல்லாமல் ஒரு திரைப்படத்தை எப்படி தொடங்க முடியும்?",
        "ஒரு திரைப்படம் உருவாகுவது ஒரு சாதாரண வேலை அல்ல. அது ஒரு கூட்டுப் பொறுப்பு.",
        "ஒரு திரைப்படம் எப்போதும் பிரசவத்தை நினைவூட்டுகிறது. அதனால் திரைக்கதையில் செலவழிக்கப்படும் நேரம் ஒருபோதும் வீணாகாது.",
        "திரைக்கதை என்பது மரியாதை — அந்தத் திரைப்படத்தில் தங்கள் நேரம், திறமை, வாழ்க்கையை அர்ப்பணிக்கும் ஒவ்வொருவருக்கும்.",
      ],
    },
    {
      id: "chapter-6",
      number: 6,
      title: "To Those Who Wish to Tell Stories",
      titleTamil: "புதிய கதை சொல்லிகளுக்குச் சொல்ல வரும் புவது",
      excerpt:
        "Know exactly what story you are trying to tell. Writing a story is important. Knowing why you are writing it is even more important.",
      excerptTamil:
        "நீங்கள் எந்தக் கதையைச் சொல்ல வருகிறீர்கள் என்பதை தெளிவாக அறிந்திருக்க வேண்டும். கதையை எழுதுவது முக்கியம். ஏன் எழுதுகிறோம் என்பதை அறிவது அத보ும் முக்கியம்.",
      content: [
        "Never walk into an opportunity only half prepared. Your very first meeting reveals the way you think.",
        "Perhaps every story in the world has already been told. But your perspective has never been told.",
        "Learn from Tamil cinema, world cinema, books, and life itself. But when you tell your story, let it be told in your own voice.",
        "When I listen to a story, I look for conviction, honesty, hard work, vision. If those qualities are present, everything else can be learned.",
      ],
      contentTamil: [
        "ஒரு வாய்ப்புக்காக பாதி தயாரிப்போடு வரக்கூடாது. முதல் சந்திப்பிலேயே உங்கள் சிந்தனை வெளிப்படும்.",
        "இந்த உலகத்தில் எல்லாக் கதைகளும் ஏற்கனவே சொல்லப்பட்டிருக்கலாம். ஆனால், உங்கள் பார்வை மட்டும் இதுவரை சொல்லப்படவில்லை.",
        "தமிழ் சினிமாவிலிருந்து, உலகச் சினிமாவிலிருந்து, நூல்களிலிருந்து, வாழ்க்கையிலிருந்து கற்றுக்கொள்ளுங்கள். ஆனால், சொல்லும்போது அது உங்கள் குரலில் இருக்க வேண்டும்.",
        "ஒரு கதையைக் கேட்கும்போது, நம்பிக்கை, நேர்மை, உழைப்பு, பார்வை — இவற்றைத் தேடுகிறேன். அந்த அடிப்படை இருந்தால், மற்றவை கற்றுக்கொள்ளலாம்.",
      ],
    },
    {
      id: "chapter-7",
      number: 7,
      title: "Searching for Pearls",
      titleTamil: "முத்துக்குளத்தைத் தேடும் என் பயணம்",
      excerpt:
        "The moment I recognize a new talent before the rest of the world does — no success can be compared with that feeling.",
      excerptTamil:
        "உலகம் அறியாத ஒரு படைப்பாளியை முதன்முதலில் சந்திக்கும் அந்த நொடி — அதற்கு ஈடு இல்லை.",
      content: [
        "When I look back, it is not the films that remain most vividly in my memory. It is the people.",
        "The first story they ever narrated. The confidence in their eyes. Their hesitation. Their excitement. Their dreams.",
        "True talent is never manufactured. It is discovered. That search has become my journey.",
        "If you have genuinely devoted yourself to developing your talent, I will do everything I can to recognize it.",
      ],
      contentTamil: [
        "பின்னோக்கிப் பார்க்கும்போது, நினைவில் தங்குவது திரைப்படங்கள் அல்ல — மனிதர்கள்.",
        "அவர்கள் சொன்ன முதல் கதை. அவர்களின் கண்களில் தெரிந்த நம்பிக்கை. தயக்கம். ஆர்வம். கனவு.",
        "உண்மையான திறமை ஒருநாளும் உருவாக்கப்படுவதில்லை; கண்டுபிடிக்கப்படுகிறது. அந்தத் தேடல்தான் என் பயணம்.",
        "நீங்கள் உங்கள் திறமையை உண்மையாக வளர்த்துக்கொண்டு வந்தால், அதை அடையாளம் காண என்னால் முடிந்ததைச் செய்வேன்.",
      ],
    },
    {
      id: "chapter-8",
      number: 8,
      title: "Epilogue: The Journey Continues",
      titleTamil: "நான் நம்பும் நாளைய தமிழ் சினிமா",
      excerpt:
        "People are still searching for good stories. That belief keeps me watching films every single week.",
      excerptTamil:
        "மக்கள் இன்னும் நல்ல கதைகளைத் தேடிக்கொண்டிருக்கிறார்கள். அந்த நம்பிக்கைதான் ஒவ்வொரு வாரமும் திரைப்படங்களைப் பார்க்க வைக்கிறது.",
      content: [
        "Tamil cinema continues to evolve. New technologies emerge. New actors and directors arrive. Yet one thing has never changed — people are still searching for good stories.",
        "For me, cinema has never been merely a profession. It is still a lifelong education. Even today, I consider myself a student.",
        "If you dream of becoming a storyteller, come forward with faith in yourself. Tell your story with complete honesty.",
        "When a gifted storyteller emerges, it is not just another film that is born. The next generation of Tamil cinema is born with them.",
      ],
      contentTamil: [
        "தமிழ் சினிமா தொடர்ந்து மாறிக்கொண்டிருக்கிறது. புதிய தொழில்நுட்பம், புதிய நடிகர்கள், இயக்குநர்கள் வருகிறார்கள். ஆனால் ஒரு விஷயம் மட்டும் மாறவில்லை — மக்கள் இன்னும் நல்ல கதைகளைத் தேடிக்கொண்டிருக்கிறார்கள்.",
        "எனக்கு சினிமா ஒரு தொழில் அல்ல. இன்னும் ஒரு கற்றல். இன்றும் நான் ஒரு மாணவனாகவே இருக்கிறேன்.",
        "நீங்கள் ஒரு கதை சொல்லியாக மாற விரும்பினால், உங்கள்மேல் நம்பிக்கை வைத்து வாருங்கள். உங்கள் கதையை முழு நேர்மையுடன் சொல்லுங்கள்.",
        "ஒரு திறமையான கதை சொல்லி உருவாகும்போது, ஒரு திரைப்படம் மட்டும் பிறப்பதில்லை. தமிழ் சினிமாவின் அடுத்த தலைமுறையும் அவர்களுடன் பிறக்கிறது.",
      ],
    },
  ] satisfies Chapter[],
};
