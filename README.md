# Week4

### Angular Commands
1. Create New App ( ng new app-name )
2. Build New App ( ng build )
3. Serve New App ( ng serve --open )
4. Generate New Component ( ng generate component "pageName" )
5. Set Routing ( ng generate module app-routing --flat --module=app )

### Router Commands
1. To navigate programmatically: ( this.router.navigateByUrl(/'page') )
2. inject constructor to make router available: ( constructor(private router: Router){} )
3. To access router service: ( import { Router } from '@angular/router’; )

### NPM Madules Commands
1. Install Angular CLI ( npm install -g @angular/cli )
2. Install Boostrap ( npm install bootstrap -save )

### Git Commands Using Git-Bash
1. Initialise local git repository ( git init )
2. Add all files to be tracked ( git add -A ) 
3. Commit the local changes with message ( git commit -m "message goes here" )
4. Add an alias for origin to your remote repository ( git remote add origin [url to repository] )
5. Push local report to the remote ( git push f -u origin main/master )

### Change Execution Policies
1. Use PowerShell in admin mode ( Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine ) and input [A]
