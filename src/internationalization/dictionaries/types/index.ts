import englishDictionary from "../en.json";
import japaneseDictionary from "../en.json";

export type SettingsDictionary = Common<typeof englishDictionary.settings, typeof japaneseDictionary.settings>;
export type NavMobileDictionary = Common<typeof englishDictionary.navMobile, typeof japaneseDictionary.navMobile>;
export type DemoWebsiteItemDictionary = Common<typeof englishDictionary.demoWebsitesItem, typeof japaneseDictionary.demoWebsitesItem>;
export type ContactFormDictionary = Common<typeof englishDictionary.contactForm, typeof japaneseDictionary.contactForm>;



type Common<A, B> = {
  [P in keyof A & keyof B]: A[P] | B[P];
};

