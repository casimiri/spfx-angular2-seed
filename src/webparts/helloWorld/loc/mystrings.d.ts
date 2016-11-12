declare interface IHelloWorldStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  NameFieldLabel: string;
  IsActiveFieldText:boolean;
  CountryDropdownFieldLabel:string;
}

declare module 'helloWorldStrings' {
  const strings: IHelloWorldStrings;
  export = strings;
}
