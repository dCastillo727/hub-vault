// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: "https://api.github.com/repos/WilliamAndreu/hybrid-storage",
//  apiBaseUrl: "https://api.github.com/repos/rudoapps/hybrid-storage",

  mainDirectories: [

    {
      directoryName: "Angular",
      directoryPath: "angular",
      icon: "assets/angular.webp"
    },
    
    {
      directoryName: "Flutter",
      directoryPath: "flutter",
      icon: "assets/flutter.webp"
    }
  ]

};

