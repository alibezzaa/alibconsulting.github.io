/* i18n.js — French / Arabic translations + language switcher */

const TRANSLATIONS = {
  fr: {
    /* ── Nav ── */
    'nav.home':     'Accueil',
    'nav.about':    'À Propos',
    'nav.services': 'Services',
    'nav.blog':     'Blog',
    'nav.contact':  'Contact',
    'nav.cta':      'Nous Contacter',

    /* ── Home Hero ── */
    'home.hero.label': 'Conseil · Formation · Études · Archivage',
    'home.hero.title': 'L\'expertise au service des <em>administrations</em> et des entrepreneurs',
    'home.hero.sub':   'ALIB Consulting accompagne administrations publiques, collectivités territoriales, entreprises privées et entrepreneurs avec des formations sur mesure, des études stratégiques, des conseils opérationnels et des solutions d\'archivage et de dématérialisation.',
    'home.hero.btn1':  'Nos Services',
    'home.hero.btn2':  'Nous Contacter',
    'home.stat1.num':   '15+',
    'home.stat1.label': 'Années d\'expérience',
    'home.stat2.num':   '10',
    'home.stat2.label': 'Ans en collectivités',
    'home.stat3.num':   '4',
    'home.stat3.label': 'Domaines d\'expertise',

    /* ── Home Services preview ── */
    'home.services.label': 'Nos Services',
    'home.services.title': 'Une expertise pluridisciplinaire à votre service',
    'home.services.sub':   'De la formation sur mesure à la dématérialisation de vos archives, en passant par les études stratégiques et le conseil public.',
    'home.srv1.title': 'Formations sur Mesure',
    'home.srv1.desc':  'Programmes de formation personnalisés pour administrations publiques, secteur privé et entrepreneurs.',
    'home.srv2.title': 'Études Stratégiques & Marché',
    'home.srv2.desc':  'Études de marché, analyses concurrentielles, études de faisabilité et diagnostics stratégiques.',
    'home.srv3.title': 'Archivage & Dématérialisation',
    'home.srv3.desc':  'Organisation, numérisation et gestion électronique des archives, en phase avec la stratégie nationale 2030.',
    'home.srv4.title': 'Conseil Administrations Publiques',
    'home.srv4.desc':  'Accompagnement des collectivités territoriales et organismes publics : gouvernance, développement et conduite du changement.',

    /* ── Home Why ── */
    'home.why.label': 'Pourquoi nous choisir',
    'home.why.title': 'Terrain, académie et innovation — réunis',
    'home.why.sub':   'Une combinaison rare : 10 ans dans les collectivités territoriales marocaines et une carrière académique active en stratégie et intelligence économique.',
    'home.p1.title':  'Expertise Institutionnelle',
    'home.p1.desc':   '10 ans au Ministère de l\'Intérieur comme cadre territorial — une connaissance fine des rouages administratifs et des enjeux des collectivités.',
    'home.p2.title':  'Rigueur Académique',
    'home.p2.desc':   'Docteur en Gestion, professeur en stratégie et intelligence économique à l\'université — une méthodologie scientifique appliquée à vos défis concrets.',
    'home.p3.title':  'Innovation Pédagogique',
    'home.p3.desc':   'Des formations qui mixent les dernières approches pédagogiques et une expérience terrain unique pour un apprentissage ancré dans la réalité.',
    'home.p4.title':  'Accompagnement Sur-Mesure',
    'home.p4.desc':   'Chaque mission est adaptée à votre contexte — public, privé ou entrepreneurial — pour des résultats concrets et mesurables.',

    /* ── Home Posts ── */
    'home.posts.label': 'Blog & Ressources',
    'home.posts.title': 'Derniers Articles',
    'home.posts.sub':   'Analyses, conseils pratiques et veille pour décideurs publics, dirigeants et entrepreneurs.',
    'home.posts.more':  'Voir tous les articles →',

    /* ── Home CTA ── */
    'home.cta.title': 'Prêt à transformer votre organisation ?',
    'home.cta.sub':   'Prenez rendez-vous pour une première consultation gratuite.',
    'home.cta.btn1':  'Prendre Rendez-vous',
    'home.cta.btn2':  'Voir nos Services',

    /* ── About ── */
    'about.hero.title': 'À Propos d\'ALIB Consulting',
    'about.crumb':      'À Propos',
    'about.tag':        'Fondateur & Consultant Principal',
    'about.name':       'Ali Bezzaa',
    'about.p1': 'Professeur associé à l\'Université Cadi Ayyad de Marrakech et fondateur d\'ALIB Consulting, Ali Bezzaa est une figure rare qui allie rigueur académique et ancrage institutionnel profond. Fort de plus de 10 ans d\'expérience au sein du Ministère de l\'Intérieur en tant que cadre territorial, il maîtrise les complexités du terrain des collectivités territoriales marocaines et apporte des solutions qui mixent innovation pédagogique et expertise opérationnelle.',
    'about.p2': 'Titulaire d\'un doctorat en Économie et Gestion (Université Hassan 1er), d\'un Master en Management International (Université de Reutlingen, Allemagne) et d\'une Licence en Administration des Affaires (Université Al Akhawayn), il enseigne aujourd\'hui la stratégie d\'entreprise et l\'intelligence économique à l\'université — une expertise qu\'il met directement au service de ses clients.',
    'about.p3': 'Fondateur d\'ALIB Consulting depuis 2021, il accompagne administrations publiques, collectivités territoriales, entreprises privées et entrepreneurs dans leurs formations sur mesure, leurs études stratégiques et de marché, leurs projets d\'archivage et de dématérialisation, et leurs défis de gouvernance et de développement.',
    'about.cred1': 'Docteur en Gestion',
    'about.cred2': 'Master International (DE)',
    'about.cred3': 'Professeur Associé – UCA',
    'about.cred4': '10 ans en collectivités',

    'about.mission.label': 'Notre Raison d\'être',
    'about.mission.title': 'Notre Mission',
    'about.mission.text':  'Mettre l\'expertise académique et l\'expérience institutionnelle au service de la performance des organisations publiques et privées — par la formation, le conseil, les études et la transformation numérique.',

    'about.values.label':  'Ce en quoi nous croyons',
    'about.values.title':  'Nos Valeurs',
    'about.v1.title': 'Rigueur',
    'about.v1.desc':  'Des analyses fondées sur des données probantes et des méthodologies académiques éprouvées — pour des résultats fiables et solides.',
    'about.v2.title': 'Transparence',
    'about.v2.desc':  'Une communication claire et honnête à chaque étape de la mission — vous savez toujours où nous en sommes.',
    'about.v3.title': 'Satisfaction',
    'about.v3.desc':  'Votre satisfaction est notre priorité absolue — chaque mission est terminée quand vous êtes pleinement satisfait.',

    /* ── Services ── */
    'services.hero.title': 'Nos Services',
    'services.crumb':      'Services',
    'services.label':      'Ce que nous faisons',
    'services.title':      'Quatre domaines d\'expertise, une seule vision',
    'services.sub':        'Du conseil aux collectivités territoriales à la formation sur mesure, en passant par les études stratégiques et la dématérialisation — un accompagnement global pour vos enjeux publics et privés.',

    'srv1.title': 'Formations sur Mesure',
    'srv1.desc':  'Programmes de formation conçus et animés sur mesure pour administrations publiques (collectivités, ministères, établissements publics), entreprises privées et entrepreneurs. Modules : management public, gestion de projet, stratégie, intelligence économique, développement territorial, finances locales et leadership.',

    'srv2.title': 'Études de Marché & Études Stratégiques',
    'srv2.desc':  'Études de marché approfondies, analyses de la concurrence, études de faisabilité, diagnostics stratégiques et plans de développement. Une approche qui associe méthodologie académique rigoureuse et connaissance du tissu économique local et régional.',

    'srv3.title': 'Archivage & Dématérialisation',
    'srv3.desc':  'Nouvelle prestation en phase avec la stratégie nationale de digitalisation 2030. Diagnostic et audit de vos fonds d\'archives, organisation et classement physique, numérisation et mise en place d\'un système de gestion électronique des documents (GED) — pour administrations, collectivités et entreprises.',

    'srv4.title': 'Conseil aux Administrations Publiques',
    'srv4.desc':  'Accompagnement stratégique des collectivités territoriales et organismes publics : élaboration de plans de développement (PCD/PDC), programmes d\'action, gouvernance locale, conduite du changement et renforcement des capacités. Fort d\'une expérience de 10 ans au Ministère de l\'Intérieur.',

    'services.process.label': 'Comment nous travaillons',
    'services.process.title': 'Notre Processus',
    'services.process.sub':   'Une démarche structurée et transparente, de la première rencontre à la livraison des résultats.',
    'step1.title': 'Diagnostic',
    'step1.desc':  'Analyse approfondie de votre situation, vos besoins et vos contraintes.',
    'step2.title': 'Planification',
    'step2.desc':  'Élaboration d\'un plan d\'action personnalisé, réaliste et mesurable.',
    'step3.title': 'Exécution',
    'step3.desc':  'Mise en œuvre accompagnée avec points d\'étape et ajustements réguliers.',
    'step4.title': 'Évaluation',
    'step4.desc':  'Mesure des résultats, bilan et préconisations pour la suite.',

    /* ── Blog ── */
    'blog.hero.title': 'Blog & Ressources',
    'blog.crumb':      'Blog',
    'blog.label':      'Insights & Veille',
    'blog.title':      'Articles pour décideurs et entrepreneurs',
    'blog.sub':        'Analyses, bonnes pratiques et retours d\'expérience sur la gestion publique, la stratégie et l\'entrepreneuriat.',
    'blog.loading':    'Chargement des articles…',
    'blog.read_more':  'Lire la suite →',
    'blog.all':        'Voir tous les articles',

    /* ── Contact ── */
    'contact.hero.title':  'Contactez-Nous',
    'contact.crumb':       'Contact',
    'contact.form.title':  'Envoyez-nous un message',
    'contact.name':        'Votre nom complet',
    'contact.name.ph':     'Ex : Mohamed Alami',
    'contact.email':       'Adresse email',
    'contact.email.ph':    'votre@email.com',
    'contact.subject':     'Sujet',
    'contact.subject.ph':  'Ex : Demande de formation sur mesure',
    'contact.message':     'Votre message',
    'contact.message.ph':  'Décrivez votre besoin ou votre projet…',
    'contact.send':        'Envoyer le message',
    'contact.note':        '📬 Ce formulaire est purement visuel. Pour l\'activer, connectez-le à Formspree.io ou Netlify Forms.',
    'contact.info.title':  'Nos Coordonnées',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Téléphone',
    'contact.city.label':  'Localisation',
    'contact.web.label':   'Site Web',
    'contact.hours.title': 'Disponibilité',
    'contact.hours.text':  'Lun – Ven : 9h00 – 18h00\nDisponible à distance (Maroc, France, Afrique)',

    /* ── Photo strip ── */
    'strip.label': 'Sur le terrain',
    'strip.title': 'Des formations qui rassemblent et transforment',
    'strip.sub':   'Séances animées auprès de collectivités territoriales, administrations publiques et acteurs du développement local.',
    'strip.stat1': 'Participants par session',
    'strip.stat2': 'Ans de formations terrain',

    /* ── Shared ── */
    'footer.desc':    'Conseil, formation, études stratégiques et archivage pour administrations publiques, collectivités territoriales, entreprises et entrepreneurs. Basé à Marrakech.',
    'footer.pages':   'Pages',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights':  'Tous droits réservés.',
    'footer.tagline': 'Expertise · Innovation · Résultats',
  },

  ar: {
    /* ── Nav ── */
    'nav.home':     'الرئيسية',
    'nav.about':    'من نحن',
    'nav.services': 'الخدمات',
    'nav.blog':     'المدونة',
    'nav.contact':  'اتصل بنا',
    'nav.cta':      'تواصل معنا',

    /* ── Home Hero ── */
    'home.hero.label': 'استشارات · تكوين · دراسات · أرشفة',
    'home.hero.title': 'الخبرة في خدمة <em>الإدارات</em> ورواد الأعمال',
    'home.hero.sub':   'مكتب ALIB للاستشارات يرافق الإدارات العمومية والجماعات الترابية والقطاع الخاص ورواد الأعمال بتكوينات مخصصة ودراسات استراتيجية واستشارات ميدانية وحلول الأرشفة الرقمية.',
    'home.hero.btn1':  'خدماتنا',
    'home.hero.btn2':  'تواصل معنا',
    'home.stat1.num':   '+15',
    'home.stat1.label': 'سنة خبرة',
    'home.stat2.num':   '10',
    'home.stat2.label': 'سنوات في الجماعات',
    'home.stat3.num':   '4',
    'home.stat3.label': 'مجالات خبرة',

    /* ── Home Services preview ── */
    'home.services.label': 'خدماتنا',
    'home.services.title': 'خبرة متعددة التخصصات في خدمتكم',
    'home.services.sub':   'من التكوين المخصص إلى رقمنة الأرشيف، مرورًا بالدراسات الاستراتيجية والاستشارة العمومية.',
    'home.srv1.title': 'التكوين المخصص',
    'home.srv1.desc':  'برامج تكوينية مُصمَّمة للإدارات العمومية والقطاع الخاص ورواد الأعمال.',
    'home.srv2.title': 'الدراسات الاستراتيجية والسوقية',
    'home.srv2.desc':  'دراسات السوق والمنافسة والجدوى والتشخيص الاستراتيجي.',
    'home.srv3.title': 'الأرشفة والرقمنة',
    'home.srv3.desc':  'تنظيم ورقمنة وتدبير إلكتروني للوثائق، وفق الاستراتيجية الوطنية 2030.',
    'home.srv4.title': 'الاستشارة العمومية',
    'home.srv4.desc':  'مرافقة الجماعات الترابية والإدارات: الحوكمة والتنمية وتدبير التغيير.',

    /* ── Home Why ── */
    'home.why.label': 'لماذا تختاروننا',
    'home.why.title': 'الميدان والأكاديمية والابتكار — في مكان واحد',
    'home.why.sub':   'تجمع نادر: 10 سنوات في الجماعات الترابية المغربية ومسيرة أكاديمية فاعلة في الاستراتيجية والذكاء الاقتصادي.',
    'home.p1.title':  'الخبرة المؤسسية',
    'home.p1.desc':   '10 سنوات في وزارة الداخلية بوصفه إطارًا ترابيًا — معرفة دقيقة بتعقيدات الإدارة وإشكاليات الجماعات الترابية.',
    'home.p2.title':  'الصرامة الأكاديمية',
    'home.p2.desc':   'دكتوراه في التسيير وأستاذ في الاستراتيجية والذكاء الاقتصادي — منهجية علمية مُطبَّقة على تحدياتكم الفعلية.',
    'home.p3.title':  'الابتكار البيداغوجي',
    'home.p3.desc':   'تكوينات تمزج أحدث المقاربات البيداغوجية مع خبرة ميدانية فريدة لتعلم متجذر في الواقع.',
    'home.p4.title':  'المرافقة المخصصة',
    'home.p4.desc':   'كل مهمة مُكيَّفة مع سياقكم — عمومي أو خاص أو ريادي — لنتائج ملموسة وقابلة للقياس.',

    /* ── Home Posts ── */
    'home.posts.label': 'المدونة والموارد',
    'home.posts.title': 'أحدث المقالات',
    'home.posts.sub':   'تحليلات ونصائح عملية ويقظة استراتيجية للمسؤولين والمسيرين ورواد الأعمال.',
    'home.posts.more':  'عرض جميع المقالات →',

    /* ── Home CTA ── */
    'home.cta.title': 'هل أنتم مستعدون لتطوير منظومتكم؟',
    'home.cta.sub':   'احجزوا استشارة أولى مجانية.',
    'home.cta.btn1':  'احجز موعدًا',
    'home.cta.btn2':  'اكتشف خدماتنا',

    /* ── About ── */
    'about.hero.title': 'من نحن — مكتب ALIB للاستشارات',
    'about.crumb':      'من نحن',
    'about.tag':        'المؤسس والمستشار الرئيسي',
    'about.name':       'علي بزعة',
    'about.p1': 'أستاذ مشارك بجامعة القاضي عياض بمراكش ومؤسس مكتب ALIB للاستشارات، علي بزعة شخصية نادرة تجمع بين الصرامة الأكاديمية والانتماء المؤسسي العميق. بأكثر من 10 سنوات من الخبرة في وزارة الداخلية بوصفه إطارًا ترابيًا، يُتقن تعقيدات الواقع الميداني للجماعات الترابية المغربية ويقدم حلولًا تمزج الابتكار البيداغوجي والخبرة التشغيلية.',
    'about.p2': 'حاصل على الدكتوراه في الاقتصاد والتسيير (جامعة الحسن الأول)، وماجستير في الإدارة الدولية (جامعة رويتلينغن، ألمانيا)، وإجازة في إدارة الأعمال (جامعة الأخوين)، يُدرّس اليوم استراتيجية المؤسسات والذكاء الاقتصادي بالجامعة — خبرة يضعها مباشرة في خدمة عملائه.',
    'about.p3': 'منذ تأسيسه لمكتب ALIB للاستشارات عام 2021، يرافق الإدارات العمومية والجماعات الترابية والقطاع الخاص ورواد الأعمال في تكوينهم المخصص ودراساتهم الاستراتيجية والسوقية ومشاريع الأرشفة والرقمنة وتحديات الحوكمة والتنمية.',
    'about.cred1': 'دكتوراه في التسيير',
    'about.cred2': 'ماجستير دولي (ألمانيا)',
    'about.cred3': 'أستاذ مشارك – UCA',
    'about.cred4': '10 سنوات في الجماعات',

    'about.mission.label': 'سبب وجودنا',
    'about.mission.title': 'مهمتنا',
    'about.mission.text':  'وضع الخبرة الأكاديمية والتجربة المؤسسية في خدمة أداء المنظمات العمومية والخاصة — عبر التكوين والاستشارة والدراسات والتحول الرقمي.',

    'about.values.label':  'ما نؤمن به',
    'about.values.title':  'قيمنا',
    'about.v1.title': 'الصرامة العلمية',
    'about.v1.desc':  'تحليلات مبنية على الأدلة والمنهجيات الأكاديمية — لنتائج موثوقة وراسخة.',
    'about.v2.title': 'الشفافية',
    'about.v2.desc':  'تواصل واضح وصادق في كل مرحلة من مراحل المهمة — أنتم دائمًا على اطلاع تام.',
    'about.v3.title': 'الرضا',
    'about.v3.desc':  'رضاكم هو أولويتنا المطلقة — لا تنتهي أي مهمة إلا حين تكونون راضين تمامًا.',

    /* ── Services ── */
    'services.hero.title': 'خدماتنا',
    'services.crumb':      'الخدمات',
    'services.label':      'ما نقدمه',
    'services.title':      'أربعة مجالات خبرة، رؤية واحدة',
    'services.sub':        'من الاستشارة للجماعات الترابية إلى التكوين المخصص، مرورًا بالدراسات الاستراتيجية والرقمنة — مرافقة شاملة لتحدياتكم العمومية والخاصة.',

    'srv1.title': 'التكوين المخصص',
    'srv1.desc':  'برامج تكوينية مُصمَّمة وتؤطَّر على مقاس الإدارات العمومية (الجماعات والوزارات والمؤسسات العمومية) والقطاع الخاص ورواد الأعمال. المحاور: التدبير العمومي، تدبير المشاريع، الاستراتيجية، الذكاء الاقتصادي، التنمية الترابية، المالية المحلية والقيادة.',

    'srv2.title': 'دراسات السوق والدراسات الاستراتيجية',
    'srv2.desc':  'دراسات سوقية معمقة، تحليل المنافسة، دراسات الجدوى، التشخيصات الاستراتيجية ومخططات التنمية. منهجية تجمع الصرامة الأكاديمية ومعرفة النسيج الاقتصادي المحلي والجهوي.',

    'srv3.title': 'الأرشفة والرقمنة',
    'srv3.desc':  'خدمة جديدة في إطار الاستراتيجية الوطنية للتحول الرقمي 2030. تشخيص وتدقيق رصيدكم الأرشيفي، التنظيم والترتيب المادي، الرقمنة وإرساء نظام التدبير الإلكتروني للوثائق (GED) — للإدارات والجماعات والمؤسسات.',

    'srv4.title': 'الاستشارة للإدارات العمومية',
    'srv4.desc':  'مرافقة استراتيجية للجماعات الترابية والهيئات العمومية: إعداد مخططات التنمية (PCD/PDC)، برامج العمل، الحوكمة المحلية، قيادة التغيير وتعزيز القدرات. بخبرة ميدانية 10 سنوات في وزارة الداخلية.',

    'services.process.label': 'كيف نعمل',
    'services.process.title': 'منهجيتنا',
    'services.process.sub':   'مقاربة منظمة وشفافة، من اللقاء الأول إلى تسليم النتائج.',
    'step1.title': 'التشخيص',
    'step1.desc':  'تحليل معمق لوضعكم واحتياجاتكم وقيودكم.',
    'step2.title': 'التخطيط',
    'step2.desc':  'إعداد خطة عمل مخصصة وواقعية وقابلة للقياس.',
    'step3.title': 'التنفيذ',
    'step3.desc':  'تطبيق مُرافَق مع نقاط مرحلية وتعديلات منتظمة.',
    'step4.title': 'التقييم',
    'step4.desc':  'قياس النتائج وإعداد التقرير والتوصيات المستقبلية.',

    /* ── Blog ── */
    'blog.hero.title': 'المدونة والموارد',
    'blog.crumb':      'المدونة',
    'blog.label':      'رؤى ويقظة استراتيجية',
    'blog.title':      'مقالات للمسؤولين ورواد الأعمال',
    'blog.sub':        'تحليلات وممارسات جيدة وتجارب ميدانية في التدبير العمومي والاستراتيجية وريادة الأعمال.',
    'blog.loading':    'جارٍ تحميل المقالات…',
    'blog.read_more':  'اقرأ المزيد ←',
    'blog.all':        'عرض جميع المقالات',

    /* ── Contact ── */
    'contact.hero.title':  'تواصلوا معنا',
    'contact.crumb':       'اتصل بنا',
    'contact.form.title':  'أرسلوا لنا رسالة',
    'contact.name':        'الاسم الكامل',
    'contact.name.ph':     'مثال: محمد العلمي',
    'contact.email':       'البريد الإلكتروني',
    'contact.email.ph':    'بريدكم@email.com',
    'contact.subject':     'الموضوع',
    'contact.subject.ph':  'مثال: طلب تكوين مخصص',
    'contact.message':     'رسالتكم',
    'contact.message.ph':  'صفوا حاجتكم أو مشروعكم…',
    'contact.send':        'إرسال الرسالة',
    'contact.note':        '📬 هذا النموذج تجريبي. لتفعيله، اربطه بـ Formspree.io أو Netlify Forms.',
    'contact.info.title':  'معلومات التواصل',
    'contact.email.label': 'البريد الإلكتروني',
    'contact.phone.label': 'الهاتف',
    'contact.city.label':  'الموقع',
    'contact.web.label':   'الموقع الإلكتروني',
    'contact.hours.title': 'أوقات التواصل',
    'contact.hours.text':  'الاثنين – الجمعة: 9:00 – 18:00\nمتاحون عن بُعد (المغرب، فرنسا، إفريقيا)',

    /* ── Photo strip ── */
    'strip.label': 'في الميدان',
    'strip.title': 'تكوينات تجمع وتُحدث التغيير',
    'strip.sub':   'جلسات تكوينية مُنجزة لفائدة الجماعات الترابية والإدارات العمومية وفاعلي التنمية المحلية.',
    'strip.stat1': 'مشارك في كل جلسة',
    'strip.stat2': 'سنوات تكوين ميداني',

    /* ── Shared ── */
    'footer.desc':    'استشارات وتكوين ودراسات استراتيجية وأرشفة للإدارات العمومية والجماعات الترابية والمؤسسات والمقاولين. مقرنا مراكش.',
    'footer.pages':   'الصفحات',
    'footer.services': 'الخدمات',
    'footer.contact': 'التواصل',
    'footer.rights':  'جميع الحقوق محفوظة.',
    'footer.tagline': 'خبرة · ابتكار · نتائج',
  },

  en: {
    /* ── Nav ── */
    'nav.home':     'Home',
    'nav.about':    'About',
    'nav.services': 'Services',
    'nav.blog':     'Blog',
    'nav.contact':  'Contact',
    'nav.cta':      'Get in Touch',

    /* ── Home Hero ── */
    'home.hero.label': 'Consulting · Training · Research · Archiving',
    'home.hero.title': 'Expertise in service of <em>public institutions</em> and entrepreneurs',
    'home.hero.sub':   'ALIB Consulting supports public administrations, local authorities, private companies and entrepreneurs with tailor-made training, strategic studies, operational advice and document digitization solutions.',
    'home.hero.btn1':  'Our Services',
    'home.hero.btn2':  'Contact Us',
    'home.stat1.num':   '15+',
    'home.stat1.label': 'Years of experience',
    'home.stat2.num':   '10',
    'home.stat2.label': 'Years in local gov.',
    'home.stat3.num':   '4',
    'home.stat3.label': 'Areas of expertise',

    /* ── Home Services preview ── */
    'home.services.label': 'Our Services',
    'home.services.title': 'Multidisciplinary expertise at your service',
    'home.services.sub':   'From tailored training to document digitization, strategic research and public sector consulting.',
    'home.srv1.title': 'Tailored Training Programs',
    'home.srv1.desc':  'Custom training programs for public administrations, private companies and entrepreneurs.',
    'home.srv2.title': 'Strategic & Market Studies',
    'home.srv2.desc':  'Market research, competitive analysis, feasibility studies and strategic diagnostics.',
    'home.srv3.title': 'Archiving & Digitization',
    'home.srv3.desc':  'Document organization, scanning and electronic document management, aligned with Morocco\'s 2030 digital strategy.',
    'home.srv4.title': 'Public Administration Consulting',
    'home.srv4.desc':  'Strategic support for local authorities: development plans, governance, change management.',

    /* ── Home Why ── */
    'home.why.label': 'Why choose us',
    'home.why.title': 'Field experience, academia and innovation — combined',
    'home.why.sub':   'A rare combination: 10 years in Moroccan local authorities and an active academic career in strategy and competitive intelligence.',
    'home.p1.title':  'Institutional Expertise',
    'home.p1.desc':   '10 years at the Ministry of Interior as a territorial executive — in-depth knowledge of administrative processes and local governance challenges.',
    'home.p2.title':  'Academic Rigor',
    'home.p2.desc':   'PhD in Management, professor of strategy and competitive intelligence — scientific methodology applied to your real-world challenges.',
    'home.p3.title':  'Pedagogical Innovation',
    'home.p3.desc':   'Training programs combining the latest pedagogical approaches with unique field experience for grounded, practical learning.',
    'home.p4.title':  'Tailor-Made Support',
    'home.p4.desc':   'Every engagement is adapted to your context — public, private or entrepreneurial — for concrete, measurable results.',

    /* ── Home Posts ── */
    'home.posts.label': 'Blog & Resources',
    'home.posts.title': 'Latest Articles',
    'home.posts.sub':   'Analysis, best practices and insights for public sector leaders, managers and entrepreneurs.',
    'home.posts.more':  'View all articles →',

    /* ── Home CTA ── */
    'home.cta.title': 'Ready to transform your organization?',
    'home.cta.sub':   'Book a free first consultation.',
    'home.cta.btn1':  'Book a Meeting',
    'home.cta.btn2':  'Our Services',

    /* ── About ── */
    'about.hero.title': 'About ALIB Consulting',
    'about.crumb':      'About',
    'about.tag':        'Founder & Lead Consultant',
    'about.name':       'Ali Bezzaa',
    'about.p1': 'Associate Professor at Cadi Ayyad University in Marrakech and founder of ALIB Consulting, Ali Bezzaa is a rare profile combining academic rigor and deep institutional grounding. With over 10 years of experience at the Ministry of Interior as a territorial executive, he has mastered the complexities of Moroccan local governance and delivers solutions that blend pedagogical innovation with operational expertise.',
    'about.p2': 'Holding a PhD in Economics and Management (Hassan 1st University), an MSc in International Management (Reutlingen University, Germany) and a BBA (Al Akhawayn University), he currently teaches business strategy and competitive intelligence at university — expertise he puts directly at his clients\' service.',
    'about.p3': 'Since founding ALIB Consulting in 2021, he supports public administrations, local authorities, private firms and entrepreneurs in their training programs, strategic and market studies, archiving and digitization projects, and governance and development challenges.',
    'about.cred1': 'PhD in Management',
    'about.cred2': 'MSc International (Germany)',
    'about.cred3': 'Associate Professor – UCA',
    'about.cred4': '10 yrs in local gov.',

    'about.mission.label': 'Our Purpose',
    'about.mission.title': 'Our Mission',
    'about.mission.text':  'Put academic expertise and institutional experience at the service of public and private organizational performance — through training, consulting, research and digital transformation.',

    'about.values.label':  'What we believe in',
    'about.values.title':  'Our Values',
    'about.v1.title': 'Rigor',
    'about.v1.desc':  'Evidence-based analyses grounded in proven academic methodologies — for reliable, solid results.',
    'about.v2.title': 'Transparency',
    'about.v2.desc':  'Clear and honest communication at every stage of the engagement — you always know exactly where things stand.',
    'about.v3.title': 'Satisfaction',
    'about.v3.desc':  'Your satisfaction is our absolute priority — every engagement is complete only when you are fully satisfied.',

    /* ── Services ── */
    'services.hero.title': 'Our Services',
    'services.crumb':      'Services',
    'services.label':      'What we do',
    'services.title':      'Four areas of expertise, one vision',
    'services.sub':        'From public administration consulting to tailored training, strategic studies and document digitization — comprehensive support for your public and private challenges.',

    'srv1.title': 'Tailored Training Programs',
    'srv1.desc':  'Training programs designed and delivered on demand for public administrations (local authorities, ministries, public bodies), private companies and entrepreneurs. Modules: public management, project management, strategy, competitive intelligence, territorial development, local finance and leadership.',

    'srv2.title': 'Market Research & Strategic Studies',
    'srv2.desc':  'In-depth market research, competitive analysis, feasibility studies, strategic diagnostics and development plans. An approach combining rigorous academic methodology with knowledge of the local and regional economic fabric.',

    'srv3.title': 'Archiving & Digitization',
    'srv3.desc':  'New service aligned with Morocco\'s 2030 national digitalization strategy. Archive audit and diagnosis, physical organization and classification, scanning and electronic document management (EDM) implementation — for administrations, local authorities and companies.',

    'srv4.title': 'Public Administration Consulting',
    'srv4.desc':  'Strategic support for local authorities and public bodies: development plan preparation (PCD/PDC), action programs, local governance, change management and capacity building. Backed by 10 years of experience at the Ministry of Interior.',

    'services.process.label': 'How we work',
    'services.process.title': 'Our Process',
    'services.process.sub':   'A structured and transparent approach, from the first meeting to delivery.',
    'step1.title': 'Diagnosis',
    'step1.desc':  'In-depth analysis of your situation, needs and constraints.',
    'step2.title': 'Planning',
    'step2.desc':  'Development of a personalized, realistic and measurable action plan.',
    'step3.title': 'Execution',
    'step3.desc':  'Supported implementation with regular milestones and adjustments.',
    'step4.title': 'Evaluation',
    'step4.desc':  'Measuring results, reporting and recommendations for the future.',

    /* ── Blog ── */
    'blog.hero.title': 'Blog & Resources',
    'blog.crumb':      'Blog',
    'blog.label':      'Insights & Strategic Watch',
    'blog.title':      'Articles for leaders and entrepreneurs',
    'blog.sub':        'Analysis, best practices and field insights on public management, strategy and entrepreneurship.',
    'blog.loading':    'Loading articles…',
    'blog.read_more':  'Read more →',
    'blog.all':        'View all articles',

    /* ── Contact ── */
    'contact.hero.title':  'Contact Us',
    'contact.crumb':       'Contact',
    'contact.form.title':  'Send us a message',
    'contact.name':        'Full name',
    'contact.name.ph':     'e.g. Mohamed Alami',
    'contact.email':       'Email address',
    'contact.email.ph':    'your@email.com',
    'contact.subject':     'Subject',
    'contact.subject.ph':  'e.g. Training program inquiry',
    'contact.message':     'Your message',
    'contact.message.ph':  'Describe your need or project…',
    'contact.send':        'Send message',
    'contact.note':        '📬 This form is static. To activate it, connect it to Formspree.io or Netlify Forms.',
    'contact.info.title':  'Contact Information',
    'contact.email.label': 'Email',
    'contact.phone.label': 'Phone',
    'contact.city.label':  'Location',
    'contact.web.label':   'Website',
    'contact.hours.title': 'Availability',
    'contact.hours.text':  'Mon – Fri: 9:00 AM – 6:00 PM\nAvailable remotely (Morocco, France, Africa)',

    /* ── Photo strip ── */
    'strip.label': 'In the field',
    'strip.title': 'Training that brings people together and drives change',
    'strip.sub':   'Sessions delivered for local authorities, public administrations and local development stakeholders.',
    'strip.stat1': 'Participants per session',
    'strip.stat2': 'Years of field training',

    /* ── Shared ── */
    'footer.desc':    'Consulting, training, strategic studies and archiving for public administrations, local authorities, businesses and entrepreneurs. Based in Marrakech, Morocco.',
    'footer.pages':   'Pages',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights':  'All rights reserved.',
    'footer.tagline': 'Expertise · Innovation · Results',
  },
};

/* ── Engine ─────────────────────────────────────────────────── */
const DEFAULT_LANG = 'fr';

function getCurrentLang() {
  return localStorage.getItem('alib-lang') || DEFAULT_LANG;
}

function setLang(lang) {
  localStorage.setItem('alib-lang', lang);
  applyLang(lang);
}

function t(key, lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
  return dict[key] || TRANSLATIONS[DEFAULT_LANG][key] || key;
}

function applyLang(lang) {
  const html = document.documentElement;
  if (lang === 'ar') {
    html.setAttribute('lang', 'ar');
    html.setAttribute('dir', 'rtl');
  } else {
    html.setAttribute('lang', lang === 'en' ? 'en' : 'fr');
    html.removeAttribute('dir');
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = t(key, lang);
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph'), lang));
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

function initI18n() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.lang-btn');
    if (btn) setLang(btn.getAttribute('data-lang'));
  });
  applyLang(getCurrentLang());
}

document.addEventListener('DOMContentLoaded', initI18n);
