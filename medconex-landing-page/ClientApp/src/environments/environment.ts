// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  SGWidgetDataTokenForSubscription: '386861fc73d055b997659cec39eb43d2',
  contactUsSendgridTemplateId : 'd-bfa29044f7754659a2dbd5d6e3877819',
  reCaptchaKey: '6LdawKcUAAAAAGHQ43OqZ92sWbJcsa34c7TeZD9K',
  api: {
    contactUsApi: 'http://localhost:53579/api/v1/Email/send_email_template'
  },
  contactUs: {
    senderEmail: 'angelmartinez.la@gmail.com',
    ccList: ['ncorecarbon@gmail.com']
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
