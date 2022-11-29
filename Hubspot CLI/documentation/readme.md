Most of the information written in here is available in HubSpot Documentation: 

Hubspot CLI Commands:
hs init = initialization / Initialize hubspot.config.yml for a HubSpot account.
hs --version = check cli version
hs help = help
hs <command> --help = learn more about the command
hs auth = Configure authentication for a HubSpot account. Supported authentication protocols are oauth2 and personalaccesskey.
hs accounts list = List names of accounts defined in config.
hs create <type> <Name> = Create HubSpot sample apps and CMS assets. Supported assets are function, module, react-app, template, vue-app, webpack-serverless,
website-theme.
hs fetch <github_project_folder_name> = fetch the project from github to local file
hs upload <local_project_folder_name> <github_project_folder_name> = upload the project changes from local to github
hs watch <local_project_folder_name> <github_project_folder_name> = upload the project changes from local to github on every save

NPM commands:
npm install -g @hubspot/cli = instal hubspot cli to local
npm install -g @hubspot/cli@latest = upgrade to latest version
npm uninstall -g @hubspot/cms-cli = uninstall old version

References:
https://developers.hubspot.com/docs/cms/guides/getting-started-with-local-development
https://developers.hubspot.com/docs/cms/developer-reference/local-development-cli