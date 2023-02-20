"use strict";(self.webpackChunkng_shopping_cart=self.webpackChunkng_shopping_cart||[]).push([["src_app_features_account_pages_admin_admin_module_ts"],{5409:(lt,g,a)=>{a.r(g),a.d(g,{AdminModule:()=>u});var _=a(9706),C=a(1670),f=a(9356),p=a(2197),r=a(4410),T=a(6282),t=a(2560),h=a(1527),D=a(640),S=a(3902),N=a(7822),A=a(4522),U=a(1267),Z=a(5074),v=a(4792),x=a(5892),w=a(4666);const P=["productsPaginator"],Y=["usersPaginator"],k=["productsSort"],Q=["usersSort"];function q(e,n){1&e&&(t.TgZ(0,"th",32),t._uU(1,"ID"),t.qZA())}function M(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.id)}}function O(e,n){1&e&&(t.TgZ(0,"th",32),t._uU(1,"Name"),t.qZA())}function R(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.title)}}function b(e,n){1&e&&(t.TgZ(0,"th",34),t._uU(1,"Category"),t.qZA())}function B(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.category)}}function F(e,n){1&e&&(t.TgZ(0,"th",32),t._uU(1,"Stock"),t.qZA())}function J(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.stock)}}function H(e,n){1&e&&(t.TgZ(0,"th",34),t._uU(1,"Price"),t.qZA())}function G(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.ALo(2,"currency"),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.hij(" ",t.Dn7(2,1,o.price,"USD","symbol")," ")}}function E(e,n){1&e&&(t.TgZ(0,"th",34),t._uU(1,"Actions"),t.qZA())}function $(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"td",33)(1,"button",35),t.NdJ("click",function(){const d=t.CHM(o).$implicit,c=t.oxw();return t.KtG(c.openProductDialog(d.id))}),t.TgZ(2,"mat-icon"),t._uU(3,"edit"),t.qZA()(),t.TgZ(4,"button",36)(5,"mat-icon"),t._uU(6,"delete"),t.qZA()()()}}function L(e,n){1&e&&t._UZ(0,"tr",37)}function z(e,n){1&e&&t._UZ(0,"tr",38)}function I(e,n){if(1&e&&(t.TgZ(0,"tr",39)(1,"td",40),t._uU(2," No product found "),t.qZA()()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("colSpan",o.productsDisplayedColumns.length)}}function j(e,n){1&e&&(t.TgZ(0,"th",32),t._uU(1,"ID"),t.qZA())}function K(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.id)}}function W(e,n){1&e&&(t.TgZ(0,"th",32),t._uU(1,"Name"),t.qZA())}function X(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.firstName)}}function V(e,n){1&e&&(t.TgZ(0,"th",34),t._uU(1,"Email"),t.qZA())}function tt(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.email)}}function et(e,n){1&e&&(t.TgZ(0,"th",32),t._uU(1," Username "),t.qZA())}function nt(e,n){if(1&e&&(t.TgZ(0,"td",33),t._uU(1),t.qZA()),2&e){const o=n.$implicit;t.xp6(1),t.Oqu(o.username)}}function ot(e,n){1&e&&(t.TgZ(0,"th",34),t._uU(1,"Actions"),t.qZA())}function it(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"td",33)(1,"mat-checkbox",41),t.NdJ("change",function(s){const c=t.CHM(o).$implicit,ut=t.oxw();return t.KtG(ut.markUserAsAdmin(c,s))}),t._uU(2," Change to Admin "),t.qZA()()}}function at(e,n){1&e&&t._UZ(0,"tr",37)}function rt(e,n){1&e&&t._UZ(0,"tr",38)}function ct(e,n){if(1&e&&(t.TgZ(0,"tr",39)(1,"td",40),t._uU(2," No user found "),t.qZA()()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("colSpan",o.usersDisplayedColumns.length)}}const y=function(){return[5,10,25,100]};class l{constructor(n,o,i,s,d,c){this.productsService=n,this.authService=o,this.dialog=i,this.cdr=s,this.spinner=d,this.alert=c,this.productsDisplayedColumns=["id","title","category","stock","price","actions"],this.usersDisplayedColumns=["id","name","email","username","actions"]}ngOnInit(){this.productsService.getProducts().then(n=>{this.productsDataSource=new r.by(n),this.productsDataSource.filterPredicate=this.productFilterPredicate,this.productsDataSource.paginator=this.productsPaginator,this.productsDataSource.sort=this.productsSort})}ngAfterViewInit(){const n=this.authService.getPlatformUsers().filter(o=>"admin"!==o.role);this.usersDataSource=new r.by(n),this.cdr.detectChanges(),this.usersDataSource.filterPredicate=this.userFilterPredicate,this.usersDataSource.paginator=this.usersPaginator,this.usersDataSource.sort=this.usersSort}productFilterPredicate(n,o){const i=o.toLowerCase();return n.title.toLowerCase().includes(i)||n.category.toLowerCase().includes(i)}userFilterPredicate(n,o){const i=o.toLowerCase();return n.firstName.toLowerCase().includes(i)||n.email.toLowerCase().includes(i)||n.username.toLowerCase().includes(i)}openProductDialog(n){var o=this;this.dialog.open(T.R,{width:"50%",data:n}).afterClosed().subscribe(function(){var s=(0,C.Z)(function*(d){if(d)if(n)try{o.spinner.show();const c=yield o.productsService.updateProduct(d);o.productsDataSource.data=c,o.cdr.detectChanges()}catch(c){console.log(c),o.alert.createErrorDialog("Failed to update product","")}finally{o.spinner.hide()}else try{o.spinner.show();const c=yield o.productsService.addNewProduct(d);o.productsDataSource.data=c,o.cdr.detectChanges()}catch(c){console.log(c),o.alert.createErrorDialog("Failed to add a product","")}finally{o.spinner.hide()}});return function(d){return s.apply(this,arguments)}}())}markUserAsAdmin(n,o){var i=this;o.checked&&this.alert.createConfirmDenyDialog("Change to Admin",`Do you want to turn ${n.firstName} to an administrator?`,(0,C.Z)(function*(){i.usersDataSource.data=i.authService.changeUserToAdmin(n),i.cdr.detectChanges()}),()=>{o.source.checked=!1})}applyProductsFilter(n){this.productsDataSource.filter=n.target.value.trim().toLowerCase(),this.productsDataSource.paginator&&this.productsDataSource.paginator.firstPage()}applyUserFilter(n){this.usersDataSource.filter=n.target.value.trim().toLowerCase(),this.usersDataSource.paginator&&this.usersDataSource.paginator.firstPage()}}l.\u0275fac=function(n){return new(n||l)(t.Y36(h.su),t.Y36(h.e8),t.Y36(D.uw),t.Y36(t.sBO),t.Y36(S.o),t.Y36(h.c9))},l.\u0275cmp=t.Xpm({type:l,selectors:[["ng-component"]],viewQuery:function(n,o){if(1&n&&(t.Gf(P,5,f.NW),t.Gf(Y,5,f.NW),t.Gf(k,5,p.YE),t.Gf(Q,5,p.YE)),2&n){let i;t.iGM(i=t.CRH())&&(o.productsPaginator=i.first),t.iGM(i=t.CRH())&&(o.usersPaginator=i.first),t.iGM(i=t.CRH())&&(o.productsSort=i.first),t.iGM(i=t.CRH())&&(o.usersSort=i.first)}},decls:67,vars:12,consts:[[1,"admin-container"],["mat-stretch-tabs","true","mat-align-tabs","center"],["label","Products"],[1,"admin-products-container"],["mat-raised-button","","color","accent",3,"click"],["matInput","","placeholder","Enter the product name or category",3,"keyup"],["input",""],[1,"table-container","mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["productsSort",""],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","title"],["matColumnDef","category"],["mat-header-cell","",4,"matHeaderCellDef"],["matColumnDef","stock"],["matColumnDef","price"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],[1,"mat-paginator-sticky",3,"pageSizeOptions"],["productsPaginator",""],["label","Users"],[1,"admin-users-container"],["matInput","","placeholder","Enter the user name, email or username",3,"keyup"],["usersSort",""],["matColumnDef","name"],["matColumnDef","email"],["matColumnDef","username"],["usersPaginator",""],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["align","center",1,"mat-cell",3,"colSpan"],["color","primary",3,"change"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"mat-tab-group",1)(2,"mat-tab",2)(3,"div",3)(4,"button",4),t.NdJ("click",function(){return o.openProductDialog()}),t._uU(5," Add new Product "),t.qZA(),t.TgZ(6,"mat-form-field")(7,"mat-label"),t._uU(8,"Search Product"),t.qZA(),t.TgZ(9,"input",5,6),t.NdJ("keyup",function(s){return o.applyProductsFilter(s)}),t.qZA()(),t.TgZ(11,"div",7)(12,"table",8,9),t.ynx(14,10),t.YNc(15,q,2,0,"th",11),t.YNc(16,M,2,1,"td",12),t.BQk(),t.ynx(17,13),t.YNc(18,O,2,0,"th",11),t.YNc(19,R,2,1,"td",12),t.BQk(),t.ynx(20,14),t.YNc(21,b,2,0,"th",15),t.YNc(22,B,2,1,"td",12),t.BQk(),t.ynx(23,16),t.YNc(24,F,2,0,"th",11),t.YNc(25,J,2,1,"td",12),t.BQk(),t.ynx(26,17),t.YNc(27,H,2,0,"th",15),t.YNc(28,G,3,5,"td",12),t.BQk(),t.ynx(29,18),t.YNc(30,E,2,0,"th",15),t.YNc(31,$,7,0,"td",12),t.BQk(),t.YNc(32,L,1,0,"tr",19),t.YNc(33,z,1,0,"tr",20),t.YNc(34,I,3,1,"tr",21),t.qZA(),t._UZ(35,"mat-paginator",22,23),t.qZA()()(),t.TgZ(37,"mat-tab",24)(38,"div",25)(39,"mat-form-field")(40,"mat-label"),t._uU(41,"Search User"),t.qZA(),t.TgZ(42,"input",26,6),t.NdJ("keyup",function(s){return o.applyUserFilter(s)}),t.qZA()(),t.TgZ(44,"div",7)(45,"table",8,27),t.ynx(47,10),t.YNc(48,j,2,0,"th",11),t.YNc(49,K,2,1,"td",12),t.BQk(),t.ynx(50,28),t.YNc(51,W,2,0,"th",11),t.YNc(52,X,2,1,"td",12),t.BQk(),t.ynx(53,29),t.YNc(54,V,2,0,"th",15),t.YNc(55,tt,2,1,"td",12),t.BQk(),t.ynx(56,30),t.YNc(57,et,2,0,"th",11),t.YNc(58,nt,2,1,"td",12),t.BQk(),t.ynx(59,18),t.YNc(60,ot,2,0,"th",15),t.YNc(61,it,3,0,"td",12),t.BQk(),t.YNc(62,at,1,0,"tr",19),t.YNc(63,rt,1,0,"tr",20),t.YNc(64,ct,3,1,"tr",21),t.qZA(),t._UZ(65,"mat-paginator",22,31),t.qZA()()()()()),2&n&&(t.xp6(12),t.Q6J("dataSource",o.productsDataSource),t.xp6(20),t.Q6J("matHeaderRowDef",o.productsDisplayedColumns)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",o.productsDisplayedColumns),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(10,y)),t.xp6(10),t.Q6J("dataSource",o.usersDataSource),t.xp6(17),t.Q6J("matHeaderRowDef",o.usersDisplayedColumns)("matHeaderRowDefSticky",!0),t.xp6(1),t.Q6J("matRowDefColumns",o.usersDisplayedColumns),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(11,y)))},dependencies:[N.Hw,A.lW,A.RK,U.Nt,Z.KE,Z.hX,v.oG,x.uX,x.SP,r.BZ,r.fO,r.as,r.w1,r.Dz,r.nj,r.ge,r.ev,r.XQ,r.Gk,r.Ee,f.NW,p.YE,p.nU,w.H9],styles:["[_nghost-%COMP%]     .admin-container{width:100%;min-height:calc(100vh - 164px)}[_nghost-%COMP%]     .admin-container .admin-products-container{display:flex;padding:20px 10px;flex-direction:column;gap:20px}[_nghost-%COMP%]     .admin-container .admin-products-container .mat-mdc-raised-button{width:max-content;align-self:flex-start}[_nghost-%COMP%]     .admin-container .admin-users-container{display:flex;padding:20px 10px;flex-direction:column;gap:20px}[_nghost-%COMP%]     .admin-container .table-container{width:100%;max-height:500px;overflow-x:hidden;overflow-y:auto}[_nghost-%COMP%]     .admin-container .table-container .mat-paginator-sticky{bottom:0;position:sticky;z-index:10}[_nghost-%COMP%]     .admin-container .table-container .mat-row.mat-mdc-no-data-row{height:5rem}[_nghost-%COMP%]     .admin-container .table-container .mat-row.mat-mdc-no-data-row td{font-size:1rem;font-weight:500}"]});const st=[{path:"",component:l}];class m{}m.\u0275fac=function(n){return new(n||m)},m.\u0275mod=t.oAB({type:m}),m.\u0275inj=t.cJS({imports:[_.Bz.forChild(st),_.Bz]});var dt=a(9575),mt=a(6385);class u{}u.\u0275fac=function(n){return new(n||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[dt.m,m,mt.AccountModule]})}}]);