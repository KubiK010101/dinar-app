import { t } from 'i18next';
import { images } from '../assets';
import i18n from '../local/i18n';
export type OnboardType = {
  title: string;
  details: string;
  image: number;
};

export const config = {
  oneSignalAppId: 'e3e4e8ba-2880-40b9-8c3b-3c070c1dcce7',
  adjustAppToken: 'boao9v207gn4',
};
export const onboardList: OnboardType[] = [
  {
    title: 'boards.firstTitle',
    details: 'boards.firstDetails',
    image: images.board1,
  },
  {
    title: 'boards.secondTitle',
    details: 'boards.secondDetails',
    image: images.board2,
  },
  {
    title: 'boards.thirdTitle',
    details: 'boards.thirdDetails',
    image: images.board3,
  },
];

export type TermsAndConditionType = {
  title: string;
  list: Array<TermsItemType>;
};
export type TermsItemType = { title?: string; value: string };

export const termsAndConditionsList: TermsAndConditionType[] = [
  {
    title: 'termsAndConditions.firstPart.title',
    list: [
      {
        title: 'termsAndConditions.firstPart.list.first.title',
        value: 'termsAndConditions.firstPart.list.first.value',
      },
      {
        title: 'termsAndConditions.firstPart.list.second.title',
        value: 'termsAndConditions.firstPart.list.second.value',
      },
      {
        title: 'termsAndConditions.firstPart.list.third.title',
        value: 'termsAndConditions.firstPart.list.third.value',
      },
      {
        title: 'termsAndConditions.firstPart.list.fourth.title',
        value: 'termsAndConditions.firstPart.list.fourth.value',
      },
      {
        title: 'termsAndConditions.firstPart.list.fifth.title',
        value: 'termsAndConditions.firstPart.list.fifth.value',
      },
    ],
  },

  {
    title: 'termsAndConditions.secondPart.title',
    list: [
      {
        title: 'termsAndConditions.secondPart.list.first.title',
        value: 'termsAndConditions.secondPart.list.first.value',
      },
    ],
  },

  {
    title: 'termsAndConditions.thirdPart.title',
    list: [
      {
        title: 'termsAndConditions.thirdPart.list.first.title',
        value: 'termsAndConditions.thirdPart.list.first.value',
      },
    ],
  },

  {
    title: 'termsAndConditions.fourthPart.title',
    list: [
      {
        title: 'termsAndConditions.fourthPart.list.first.title',
        value: 'termsAndConditions.fourthPart.list.first.value',
      },
    ],
  },

  {
    title: 'termsAndConditions.fifthPart.title',
    list: [
      {
        title: 'termsAndConditions.fifthPart.list.first.title',
        value: 'termsAndConditions.fifthPart.list.first.value',
      },
      {
        title: 'termsAndConditions.fifthPart.list.second.title',
        value: 'termsAndConditions.fifthPart.list.second.value',
      },
    ],
  },
  {
    title: 'termsAndConditions.sixthPart.title',
    list: [
      {
        title: 'termsAndConditions.sixthPart.list.first.title',
        value: 'termsAndConditions.sixthPart.list.first.value',
      },
    ],
  },

  {
    title: 'termsAndConditions.seventhPart.title',
    list: [
      {
        title: 'termsAndConditions.seventhPart.list.first.title',
        value: 'termsAndConditions.seventhPart.list.first.value',
      },
    ],
  },

  {
    title: 'termsAndConditions.eighthPart.title',
    list: [
      {
        title: 'termsAndConditions.eighthPart.list.first.title',
        value: 'termsAndConditions.eighthPart.list.first.value',
      },
    ],
  },

  {
    title: 'termsAndConditions.ninthPart.title',
    list: [
      {
        title: 'termsAndConditions.ninthPart.list.first.title',
        value: 'termsAndConditions.ninthPart.list.first.value',
      },
    ],
  },
  {
    title: 'termsAndConditions.tenthPart.title',
    list: [
      {
        title: 'termsAndConditions.tenthPart.list.first.title',
        value: 'termsAndConditions.tenthPart.list.first.value',
      },
      {
        title: 'termsAndConditions.tenthPart.list.second.title',
        value: 'termsAndConditions.tenthPart.list.second.value',
      },
      {
        title: 'termsAndConditions.tenthPart.list.third.title',
        value: 'termsAndConditions.tenthPart.list.third.value',
      },
      {
        title: 'termsAndConditions.tenthPart.list.fourth.title',
        value: 'termsAndConditions.tenthPart.list.fourth.value',
      },
    ],
  },
  {
    title: 'termsAndConditions.eleventhPart.title',
    list: [
      {
        title: 'termsAndConditions.eleventhPart.list.first.title',
        value: 'termsAndConditions.eleventhPart.list.first.value',
      },
    ],
  },

  {
    title: 'termsAndConditions.twelfthPart.title',
    list: [
      {
        title: 'termsAndConditions.twelfthPart.list.first.title',
        value: 'termsAndConditions.twelfthPart.list.first.value',
      },
    ],
  },
  {
    title: 'termsAndConditions.thirteenthPart.title',
    list: [
      {
        title: 'termsAndConditions.thirteenthPart.list.first.title',
        value: 'termsAndConditions.thirteenthPart.list.first.value',
      },
    ],
  },

  {
    title: 'termsAndConditions.fourteenthPart.title',
    list: [
      {
        title: 'termsAndConditions.fourteenthPart.list.first.title',
        value: 'termsAndConditions.fourteenthPart.list.first.value',
      },
    ],
  },

  {
    title: 'termsAndConditions.fifteenthPart.title',
    list: [
      {
        title: 'termsAndConditions.fifteenthPart.list.first.title',
        value: 'termsAndConditions.fifteenthPart.list.first.value',
      },
    ],
  },

  {
    title: 'termsAndConditions.sixteenthPart.title',
    list: [
      {
        title: 'termsAndConditions.sixteenthPart.list.first.title',
        value: 'termsAndConditions.sixteenthPart.list.first.value',
      },
    ],
  },

  {
    title: 'termsAndConditions.seventeenthPart.title',
    list: [
      {
        title: 'termsAndConditions.seventeenthPart.list.first.title',
        value: 'termsAndConditions.seventeenthPart.list.first.value',
      },
      {
        title: 'termsAndConditions.seventeenthPart.list.second.title',
        value: 'termsAndConditions.seventeenthPart.list.second.value',
      },
      {
        title: 'termsAndConditions.seventeenthPart.list.third.title',
        value: 'termsAndConditions.seventeenthPart.list.third.value',
      },
    ],
  },

  {
    title: 'termsAndConditions.eighteenthPart.title',
    list: [
      {
        title: 'termsAndConditions.eighteenthPart.list.first.title',
        value: 'termsAndConditions.eighteenthPart.list.first.value',
      },
    ],
  },
  {
    title: 'termsAndConditions.nineteenthPart.title',
    list: [
      {
        title: 'termsAndConditions.nineteenthPart.list.first.title',
        value: 'termsAndConditions.nineteenthPart.list.first.value',
      },
    ],
  },

  {
    title: 'termsAndConditions.twentiethPart.title',
    list: [
      {
        title: 'termsAndConditions.twentiethPart.list.first.title',
        value: 'termsAndConditions.twentiethPart.list.first.value',
      },
      {
        title: 'termsAndConditions.twentiethPart.list.second.title',
        value: 'termsAndConditions.twentiethPart.list.second.value',
      },
      {
        title: 'termsAndConditions.twentiethPart.list.third.title',
        value: 'termsAndConditions.twentiethPart.list.third.value',
      },
      {
        title: 'termsAndConditions.twentiethPart.list.fourth.title',
        value: 'termsAndConditions.twentiethPart.list.fourth.value',
      },
      {
        title: 'termsAndConditions.twentiethPart.list.fifth.title',
        value: 'termsAndConditions.twentiethPart.list.fifth.value',
      },
    ],
  },
  {
    title: 'termsAndConditions.twentyFirstPart.title',
    list: [
      {
        title: 'termsAndConditions.twentyFirstPart.list.first.title',
        value: 'termsAndConditions.twentyFirstPart.list.first.value',
      },
    ],
  },

  {
    title: 'termsAndConditions.twentySecondPart.title',
    list: [
      {
        title: 'termsAndConditions.twentySecondPart.list.first.title',
        value: 'termsAndConditions.twentySecondPart.list.first.value',
      },
      {
        title: 'termsAndConditions.twentySecondPart.list.second.title',
        value: 'termsAndConditions.twentySecondPart.list.second.value',
      },
      {
        title: 'termsAndConditions.twentySecondPart.list.third.title',
        value: 'termsAndConditions.twentySecondPart.list.third.value',
      },
      {
        title: 'termsAndConditions.twentySecondPart.list.fourth.title',
        value: 'termsAndConditions.twentySecondPart.list.fourth.value',
      },
      {
        title: 'termsAndConditions.twentySecondPart.list.fifth.title',
        value: 'termsAndConditions.twentySecondPart.list.fifth.value',
      },
    ],
  },
  {
    title: 'termsAndConditions.twentyThirdPart.title',
    list: [
      {
        title: 'termsAndConditions.twentyThirdPart.list.first.title',
        value: 'termsAndConditions.twentyThirdPart.list.first.value',
      },
    ],
  },
];
export const appData = {
  academicDegreeData: [
    { name: i18n.t('registerKycStep2.academicDegreeData.name1'), key: 'bachelor' },
    { name: i18n.t('registerKycStep2.academicDegreeData.name2'), key: 'master' },
    { name: i18n.t('registerKycStep2.academicDegreeData.name3'), key: 'doctorate' },
    { name: i18n.t('registerKycStep2.academicDegreeData.name4'), key: 'other' },
  ],
  annualIncomeData: [
    { name: i18n.t('registerKycStep2.annualIncomeData.name1'), key: '<100k' },
    { name: i18n.t('registerKycStep2.annualIncomeData.name2'), key: '100k~500k' },
    { name: i18n.t('registerKycStep2.annualIncomeData.name3'), key: '>500k' },
  ],
  assetAmountData: [
    { name: i18n.t('registerKycStep2.assetAmountData.name1'), key: '<1m' },
    { name: i18n.t('registerKycStep2.assetAmountData.name2'), key: '1m~5m' },
    { name: i18n.t('registerKycStep2.assetAmountData.name3'), key: '>5m' },
  ],
  bankList: [
    {
      name: i18n.t('bankList.name1'),
      value: 'AlRajhi',
      icon: images.AlRajhi,
    },
    {
      name: i18n.t('bankList.name2'),
      value: 'NCB',
      icon: images.NCB,
    },
    {
      name: i18n.t('bankList.name3'),
      value: 'SABB',
      icon: images.SABB,
    },
    {
      name: i18n.t('bankList.name4'),
      value: 'Alinma',
      icon: images.Alinma,
    },
    {
      name: i18n.t('bankList.name5'),
      value: 'Riyad',
      icon: images.Riyad,
    },
    {
      name: i18n.t('bankList.name6'),
      value: 'ANB',
      icon: images.ANB,
    },
    {
      name: i18n.t('bankList.name7'),
      value: 'BSF',
      icon: images.BSF,
    },
    {
      name: i18n.t('bankList.name8'),
      value: 'AlBilad',
      icon: images.AlBilad,
    },
    {
      name: i18n.t('bankList.name9'),
      value: 'AlJazira',
      icon: images.AlJazira,
    },
    {
      name: i18n.t('bankList.name10'),
      value: 'SAIB',
      icon: images.SAIB,
    },
    {
      name: i18n.t('bankList.name11'),
      value: 'Muscat',
      icon: images.Muscat,
    },

    {
      name: i18n.t('bankList.name12'),
      value: 'ENBD',
      icon: images.ENBD,
    },
    {
      name: i18n.t('bankList.name13'),
      value: 'GIB',
      icon: images.GIB,
    },
  ],
  upgradeToInvestorOptions: [
    i18n.t('upgradeToInvestor.name1'),
    i18n.t('upgradeToInvestor.name2'),
    i18n.t('upgradeToInvestor.name3'),
    i18n.t('upgradeToInvestor.name4'),
    i18n.t('upgradeToInvestor.name5'),
    i18n.t('upgradeToInvestor.name6'),
  ],
};

export const shariaCommitteeList = [
  {
    name: i18n.t('moreScreen.shariaCommitteeScreen.shariaCommitteeList.name1'),
    title: i18n.t('moreScreen.shariaCommitteeScreen.shariaCommitteeList.title1'),
    details: i18n.t('moreScreen.shariaCommitteeScreen.shariaCommitteeList.details1'),
    image: images.commission1,
  },
  {
    name: i18n.t('moreScreen.shariaCommitteeScreen.shariaCommitteeList.name2'),
    title: i18n.t('moreScreen.shariaCommitteeScreen.shariaCommitteeList.title2'),
    details: i18n.t('moreScreen.shariaCommitteeScreen.shariaCommitteeList.details2'),
    image: images.commission2,
  },
  {
    name: i18n.t('moreScreen.shariaCommitteeScreen.shariaCommitteeList.name3'),
    title: i18n.t('moreScreen.shariaCommitteeScreen.shariaCommitteeList.title3'),
    details: i18n.t('moreScreen.shariaCommitteeScreen.shariaCommitteeList.details3'),
    image: images.commission3,
  },
];
export const filterBidsOptions: Array<{
  title: string;
  filter_key: 'all' | 'my_bid';
}> = [
  { title: t('auction.listOfBids.allBids'), filter_key: 'all' },
  { title: t('auction.listOfBids.myBids'), filter_key: 'my_bid' },
];

export const bidPrivacy = t('auction.auctionDetails.bidPrivacy');
// export const bidPrivacy = `توفر الهيئة السعودية للمحامين (“الهيئة”) في موقعها الإلكتروني معلومات وبيانات، وباستخدام هذا الموقع يوافق المستخدم على الالتزام بشروط الاستخدام للموقع الإلكتروني وشروط استخدام البيانات المفتوحة، علما بأن هذه الشروط والأحكام قد تخضع للتغيير أو التعديل في أي وقت دون الالتزام بإشعار سابق. ويخضع استخدام هذا الموقع للأنظمة واللوائح ذات العلاقة وللمطالبات والخلافات التي تنشأ عن استخدام الموقع الإلكتروني للهيئة.

// حقوق النشر والملكية الفكرية
// تحتفظ الهيئة بحقوق النشر وحقوق الملكية الفكرية لمحتويات الموقع بما في ذلك شعار الهيئة. لا يحق لمستخدم الموقع نسخ أو طباعة أو تحميل أي من محتويات هذا الموقع، إلا للاستعمال الشخصي أو للاستعمال داخل الجهة أو المنظمة التي يكون المستخدم تابع لها، مع المحافظة على حقوق النشر والملكية الفكرية بذات الشكل والطريقة الموجودة في الأصل الذي نسخت أو طبعت أو حملت منه (الهيئة السعودية للمحامين ©)

// إتاحة وتوفر الموقع
// تعمل الهيئة على أن تكون خدمات الموقع الإلكتروني متوفرة ومتاحة للمستخدم على مدار الساعة، ولا تعد الهيئة مسؤولة عن عدم توفر هذه الخدمات نتيجة لأسباب فنية أو تقنية أو غيرها. ويمكن للهيئة تعليق الوصول إلى هذا الموقع بشكل مؤقت أو دائم دون الالتزام بإشعار سابق.

// الدقة والضمانات
// تبذل الهيئة الجهد للتأكد من أن المعلومات المتوفرة في هذا الموقع شاملة ودقيقة بقدر المستطاع. ولا تتحمل الهيئة أي مسئولية عن أي خسائر أو أضرار تنتج عن أي استخدام لهذا الموقع أو محتواه.

// الربط بالمواقع الأخرى
// يعد توفير الروابط للمواقع الإلكترونية الأخرى لغرض التسهيل على المستخدم، دون أدنى مسؤولية على الهيئة عن محتويات تلك المواقع الإلكترونية كما أن الهيئة لا تتبنى أي خدمات أو منتجات مقدمة أو مشار إليها في تلك `
