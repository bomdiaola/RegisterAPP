"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6488],{6488:(v,f,r)=>{r.r(f),r.d(f,{LoginPageModule:()=>i});var m=r(6814),l=r(6223),g=r(9843),d=r(3914),h=r(5861),e=r(5879),c=r(2333);const _=[{path:"",component:(()=>{var o;class s{constructor(t,u){this.router=t,this.auth=u,this.credenciales={email:null,password:null}}login(){var t=this;return(0,h.Z)(function*(){console.log("credenciales -",t.credenciales),t.credenciales.email&&t.credenciales.password?(yield t.auth.login(t.credenciales.email,t.credenciales.password))&&(console.log("login exitoso"),t.auth.getUserRole()):console.log("Ingrese email y contrase\xf1a")})()}ngOnInit(){}}return(o=s).\u0275fac=function(t){return new(t||o)(e.Y36(d.F0),e.Y36(c.e))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],decls:23,vars:2,consts:[[1,"ion-padding"],[1,"logo-container"],["src","../../../assets/RegisterAPPlogo.svg","alt","Logo de la aplicaci\xf3n"],[1,"login-text"],[3,"ngSubmit"],[1,"email-text"],["type","email","name","email","label","Email","labelPlacement","floating","placeholder","Ingresa tu email",3,"ngModel","ngModelChange"],[1,"password-text"],["type","password","name","password","label","Contrase\xf1a","labelPlacement","floating","placeholder","Ingresa tu contrase\xf1a",3,"ngModel","ngModelChange"],["expand","block","type","submit",1,"boton-login"],[1,"Google-text"],["color","medium","shape","round","type","submit"],["name","logo-google",1,"icon-google"],[1,"ion-text-register-forget"],["routerLink","/recoverypass",1,"forget-text"],["routerLink","/register",1,"register-text"]],template:function(t,u){1&t&&(e.TgZ(0,"ion-content",0)(1,"div",1),e._UZ(2,"ion-img",2),e.qZA(),e.TgZ(3,"div",3)(4,"p"),e._uU(5,"Iniciar sesi\xf3n"),e.qZA()(),e.TgZ(6,"form",4),e.NdJ("ngSubmit",function(){return u.login()}),e.TgZ(7,"ion-item",5)(8,"ion-input",6),e.NdJ("ngModelChange",function(P){return u.credenciales.email=P}),e.qZA()(),e.TgZ(9,"ion-item",7)(10,"ion-input",8),e.NdJ("ngModelChange",function(P){return u.credenciales.password=P}),e.qZA()(),e.TgZ(11,"ion-button",9),e._uU(12,"Iniciar sesi\xf3n"),e.qZA()(),e.TgZ(13,"div",10),e._uU(14," O inicia sesi\xf3n con Google "),e.TgZ(15,"p")(16,"ion-button",11),e._UZ(17,"ion-icon",12),e.qZA()()(),e.TgZ(18,"p",13)(19,"a",14),e._uU(20,"\xbfOlvid\xf3 su contrase\xf1a?"),e.qZA(),e.TgZ(21,"a",15),e._uU(22,"Registrarse"),e.qZA()()()),2&t&&(e.xp6(8),e.Q6J("ngModel",u.credenciales.email),e.xp6(2),e.Q6J("ngModel",u.credenciales.password))},dependencies:[l._Y,l.JJ,l.JL,l.On,l.F,g.YG,g.W2,g.gu,g.Xz,g.pK,g.Ie,g.j9,g.Fo,d.rH],styles:[".ion-content[_ngcontent-%COMP%]{display:auto;justify-content:center;align-items:center;height:100vh;background-color:#fff}.login-text[_ngcontent-%COMP%]{color:#002138;font-family:Open Sans,sans-serif;font-weight:bolder;font-size:28px}.boton-login[_ngcontent-%COMP%]{border-radius:20px;margin-top:40px;--background: #002138;--color: #ffffff}.boton-google[_ngcontent-%COMP%]{background-color:#ccc;border:none;padding:0}.icon-google[_ngcontent-%COMP%]{color:#fff}.logo-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:30vh;margin-bottom:20px}.ion-img[_ngcontent-%COMP%]{width:auto;height:auto}.email-text[_ngcontent-%COMP%], .password-text[_ngcontent-%COMP%]{color:gray}.Google-text[_ngcontent-%COMP%]{text-align:center;color:gray}.ion-text-register-forget[_ngcontent-%COMP%]{margin-top:100px}.forget-text[_ngcontent-%COMP%]{color:#717171;margin-right:100px}.register-text[_ngcontent-%COMP%]{color:#fbb41c;float:right}"]}),s})()}];let n=(()=>{var o;class s{}return(o=s).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.Bz.forChild(_),d.Bz]}),s})(),i=(()=>{var o;class s{}return(o=s).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.ez,l.u5,g.Pc,n]}),s})()},2333:(v,f,r)=>{r.d(f,{e:()=>e});var m=r(5861),l=r(5879),g=r(7213),d=r(9027),h=r(3914);let e=(()=>{var c;class p{constructor(n,i,o){this.authfirebase=n,this.firestore=i,this.router=o}login(n,i){return this.authfirebase.signInWithEmailAndPassword(n,i)}logout(){this.authfirebase.signOut()}registrarUser(n,i,o,s){return this.authfirebase.createUserWithEmailAndPassword(n,i).then(a=>(a.user&&this.saveUserInfo(a.user.uid,n,i,o,s),a))}saveUserInfo(n,i,o,s,a){this.firestore.collection("Usuarios").doc(n).set({nombre:a,email:o,password:i,uid:n,rol:s})}getUserRole(){var n=this;return(0,m.Z)(function*(){const i=yield n.authfirebase.currentUser;i?n.firestore.collection("Usuarios").doc(i.uid).get().subscribe(o=>{if(o.exists){const a=o.data().rol;n.redirectByRole(a)}else n.router.navigate(["/login"])}):n.router.navigate(["/login"])})()}redirectByRole(n){switch(n){case"alumno":this.router.navigate(["/home"]);break;case"profesor":this.router.navigate(["/pro-home"])}}getQRCodeData(){return this.http.get("url_a_tu_base_de_datos")}}return(c=p).\u0275fac=function(n){return new(n||c)(l.LFG(g.zQ),l.LFG(d.ST),l.LFG(h.F0))},c.\u0275prov=l.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),p})()}}]);