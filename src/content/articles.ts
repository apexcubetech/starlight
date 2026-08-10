export type Article = {
  slug: string;
  title: string;
  titleTamil: string;
  category: string;
  excerpt: string;
  excerptTamil: string;
  content: string[];
  contentTamil: string[];
};

export const articlesContent = {
  title: "Articles",
  titleTamil: "கட்டுரைகள்",
  subtitle: "Reflections on cinema, storytelling, and the art of listening",
  subtitleTamil: "சினிமா, கதை சொல்லல், கேட்பதின் கலை — பற்றிய சிந்தனைகள்",
  articles: [
    {
      slug: "honest-storytelling",
      title: "Honest Storytelling Over Genre",
      titleTamil: "வகையை விட நேர்மையான கதை சொல்லல்",
      category: "Philosophy",
      excerpt:
        "We don't ask, 'Is this commercial?' We ask, 'Will this move an audience?' Every story deserves to be judged on its own intention.",
      excerptTamil:
        "'இது வணிகமா?' என்று கேட்கிறோம் அல்ல. 'இது பார்வையாளரை நகர்த்துமா?' என்று கேட்கிறோம்.",
      content: [
        "Genre doesn't matter. Honest storytelling does. Comedy, children's film, thriller, action, family drama, art-house — every story deserves to be judged on its own intention.",
        "Story evaluation is not mechanical. Every script demands a different mind, a different emotional space, a different perspective.",
        "That is why we constantly watch films, learn from filmmakers and challenge our own thinking. The day we stop learning... we stop listening.",
      ],
      contentTamil: [
        "வகை முக்கியமல்ல. நேர்மையான கதை சொல்லல் முக்கியம். நகைச்சுவை, குழந்தைகள் படம், த்ரில்லர், ஆக்ஷன், குடும்ப நாடகம், கலைத்திரைப்படம் — ஒவ்வொரு கதையும் அதன் சொந்த நோக்கத்தின் அடிப்படையில் மதிப்பிடப்பட வேண்டும்.",
        "கதை மதிப்பீடு இயந்திரமானது அல்ல. ஒவ்வொரு திரைக்கதைக்கும் வேறுபட்ட மனம், வேறுபட்ட உணர்வு இடம், வேறுபட்ட பார்வை தேவை.",
        "அதனால்தான் தொடர்ந்து திரைப்படங்களைப் பார்க்கிறோம், இயக்குநர்களிடமிருந்து கற்கிறோம், நமது சொந்த சிந்தனையை சவால் செய்கிறோம்.",
      ],
    },
    {
      slug: "script-as-foundation",
      title: "The Script Is the Foundation",
      titleTamil: "திரைக்கதை அடித்தளம்",
      category: "Screenwriting",
      excerpt:
        "A script is not paperwork. It is the foundation of a film. A strong script honours the effort of hundreds of artists.",
      excerptTamil:
        "திரைக்கதை paperwork அல்ல. அது திரைப்படத்தின் அடித்தளம். வலுவான திரைக்கதை நூற்றுக்கணக்கான கலைஞர்களின் முயற்சிக்கு மரியாதை செலுத்துகிறது.",
      content: [
        "Hundreds of artists dedicate months of their lives to making a film. A strong script honours that effort. A weak script wastes it.",
        "That is why we believe the most important work happens before the camera starts rolling.",
        "Every great film begins beneath the surface. Preparation protects creativity. A stronger script creates a stronger film.",
      ],
      contentTamil: [
        "நூற்றுக்கணக்கான கலைஞர்கள் தங்கள் வாழ்க்கையின் மாதங்களை திரைப்படம் உருவாக்க அர்ப்பணிக்கிறார்கள். வலுவான திரைக்கதை அந்த முயற்சிக்கு மரியாதை செலுத்துகிறது.",
        "அதனால்தான் மிக முக்கியமான வேலை கேமரா சுழலத் தொடங்குவதற்கு முன் நடப்பதாக நாம் நம்புகிறோம்.",
        "ஒவ்வொரு மகத்தான திரைப்படமும் மேற்பரப்புக்கு அப்பால் தொடங்குகிறது. தயாரிப்பு படைப்பாற்றலைப் பாதுகாக்கிறது.",
      ],
    },
    {
      slug: "recognising-talent",
      title: "Recognising the Storyteller",
      titleTamil: "கதை சொல்லியை அடையாளம் காணுதல்",
      category: "Talent",
      excerpt:
        "We look beyond the story. We look at the storyteller. Sometimes talent appears in a screenplay, sometimes in a narration, sometimes in a single scene.",
      excerptTamil:
        "கதைக்கு அப்பால் பார்க்கிறோம். கதை சொல்லியைப் பார்க்கிறோம். சில சமயம் திறமை திரைக்கதையில், சில சமயம் narration-ல், சில சமயம் ஒரு காட்சியில் தென்படும்.",
      content: [
        "Experience teaches you where to look. Our role is to discover hidden brilliance before the industry sees it.",
        "Not everyone who dives into the ocean finds pearls. But experience tells the pearl diver which shell is worth bringing to the surface.",
        "A storyteller does not become talented only after achieving success. The talent has always been there. The only thing that changes is the moment the world begins to notice it.",
      ],
      contentTamil: [
        "எங்கே பார்க்க வேண்டும் என்பதை அனுபவம் கற்றுக்கொடுக்கிறது. தொழில் கண்டுபிடிப்பதற்கு முன் மறைந்த திறமையைக் கண்டுபிடிப்பதே எங்கள் பங்கு.",
        "கடலில் மூழ்கும் ஒவ்வொருவரும் முத்துக்களைக் கண்டுபிடிப்பதில்லை. ஆனால் எந்த சிப்பியில் முத்து இருக்கலாம் என்பதை அனுபவம் சொல்லும்.",
        "வெற்றி பெற்ற பிறகுதான் ஒருவர் திறமையானவராக மாறுவதில்லை. திறமை ஏற்கனவே அவருக்குள் இருந்தது. மாறுவது உலகம் அதைக் கவனிக்கும் தருணம் மட்டுமே.",
      ],
    },
    {
      slug: "tamil-cinema-worlds",
      title: "Many Worlds of Tamil Cinema",
      titleTamil: "தமிழ் சினிமாவின் பல உலகங்கள்",
      category: "Tamil Cinema",
      excerpt:
        "There is no single audience for Tamil cinema. One world celebrates stars, another longs for fresh stories, yet another searches for storytellers who can surprise.",
      excerptTamil:
        "தமிழ் சினிமாவிற்கு ஒரே ஒரு பார்வையாளர் இல்லை. ஒரு உலகம் நட்சத்திரங்களைக் கொண்டாடுகிறது, மற்றொரு உலகம் புதிய கதைகளை எதிர்பார்க்கிறது.",
      content: [
        "Tamil cinema has room for all of these worlds. That is why dividing cinema into 'commercial films' and 'award films' has never meant much.",
        "The only question that matters: Does the film honestly deliver the experience it set out to create?",
        "A heartfelt laugh, a profound love story, the pain of a family, a gripping thriller, the spirit of heroism, or an entirely new idea — what matters is that it is told truthfully.",
      ],
      contentTamil: [
        "இந்த எல்லா உலகங்களுக்கும் தமிழ் சினிமாவில் இடம் இருக்கிறது. 'வணிகப் படம்', 'விருது படம்' என்று பிரிப்பது எனக்கு அர்த்தமில்லை.",
        "முக்கியமான கேள்வி: அந்தத் திரைப்படம், அது உருவாக்க நினைத்த அனுபவத்தை உண்மையாக வழங்குகிறதா?",
        "நல்ல சிரிப்பு, ஆழமான காதல், குடும்ப வலி, த்ரில்லர், வீர உணர்வு, அல்லது புதிய சிந்தனை — எதுவாக இருந்தாலும், உண்மையாகச் சொல்லப்பட்டிருக்க வேண்டும்.",
      ],
    },
    {
      slug: "honest-guidance",
      title: "Honest Guidance Over Easy Approval",
      titleTamil: "எளிய ஒப்புதலை விட நேர்மையான வழிகாட்டுதல்",
      category: "Philosophy",
      excerpt:
        "Our responsibility isn't to reject stories. It is to help them become better. Honest guidance is more valuable than easy approval.",
      excerptTamil:
        "எங்கள் பொறுப்பு கதைகளை நிராகரிப்பது அல்ல. அவற்றை மேம்படுத்த உதவுவது. நேர்மையான வழிகாட்டுதல் எளிய ஒப்புதலை விட மதிப்புமிக்கது.",
      content: [
        "Sometimes that means asking difficult questions. Sometimes that means changing direction.",
        "Sometimes that means saying, 'This is not the story you should be telling'.",
        "If your story has honesty, if your voice has originality, if your work has conviction — we'll recognise it, challenge it, and strengthen it.",
      ],
      contentTamil: [
        "சில சமயம் கடினமான கேள்விகள் கேட்பது. சில சமயம் திசை மாற்றுவது.",
        "சில சமயம், 'இது நீங்கள் சொல்ல வேண்டிய கதை அல்ல' என்று சொல்வது.",
        "உங்கள் கதையில் நேர்மை இருந்தால், உங்கள் குரலில் originality இருந்தால், உங்கள் வேலையில் conviction இருந்தால் — அதை அடையாளம் காண்போம், சவால் செய்வோம், வலுப்படுத்துவோம்.",
      ],
    },
    {
      slug: "casting-as-storytelling",
      title: "Casting as a Storytelling Tool",
      titleTamil: "கதை சொல்லும் கருவியாக நடிகர் தேர்வு",
      category: "Filmmaking",
      excerpt:
        "Casting is not merely a production decision. It is a storytelling tool. The right creative choices can elevate a screenplay to an entirely different level.",
      excerptTamil:
        "நடிகர் தேர்வு வெறும் production முடிவு அல்ல. அது கதை சொல்லும் கருவி. சரியான படைப்பு தேர்வுகள் திரைக்கதையை வேறு உயரத்திற்கு எடுத்துச் செல்ல முடியும்.",
      content: [
        "Some films showed me how the right casting can elevate a story to extraordinary heights. Others reminded me how a small oversight can cost a remarkable opportunity.",
        "How a character is imagined, who is chosen to play that character, how the performance is shaped — every one of these decisions changes the audience's experience.",
        "A screenplay is never the final destination. A director's vision, an actor's performance, a cinematographer's visual language, a composer's score — together they can elevate a story.",
      ],
      contentTamil: [
        "சில திரைப்படங்கள் சரியான நடிகர் தேர்வு ஒரு கதையை எவ்வளவு உயரத்திற்கு எடுத்துச் செல்ல முடியும் என்பதைக் காட்டின. சில ஒரு சிறிய அலட்சியம் எவ்வளவு பெரிய வாய்ப்பைத் தவறவிடும் என்பதை நினைவூட்டின.",
        "ஒரு கதாபாத்திரம் எப்படி கற்பனை செய்யப்படுகிறது, யார் நடிக்கிறார்கள், அந்த நடிப்பு எப்படி வடிவமைக்கப்படுகிறது — இந்த முடிவுகள் பார்வையாளர் அனுபவத்தை மாற்றுகின்றன.",
        "திரைக்கதை இறுதி destination அல்ல. இயக்குநரின் பார்வை, நடிகரின் நடிப்பு, ஒளிப்பதிவாளரின் காட்சி மொழி, இசை — ஒன்றாக சேர்ந்து கதையை உயர்த்த முடியும்.",
      ],
    },
  ] satisfies Article[],
};
