// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  amplify: {
    // 以下がAWS Amplify(Auth)の設定
    Auth: {
      identityPoolId: 'ap-northeast-1:b7af109b-f40b-4ab3-b34a-4d9f615cb73b',
      region: 'ap-northeast-1',
      userPoolId: 'ap-northeast-1_my3I7YX1L',
      userPoolWebClientId: '5sutq6e4s1p6qf75lotj0iphn3'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
