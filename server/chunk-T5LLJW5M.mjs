import './polyfills.server.mjs';
import{$ as Fe,A as v,B as _e,C as Ce,D as p,E as I,F as oe,G as Ve,H as l,I as x,J as B,K as y,L as se,M as be,T as De,U as Ee,V as ae,X as Ae,Y as Me,Z as U,_,a as fe,aa as we,b as pe,c as me,d as G,da as Se,e as j,f as w,g as b,h as m,ha as Ie,i as S,j as C,k as ge,ka as xe,l as ee,m as te,n as ve,o as ie,p as ne,q as u,r as d,s as ye,t as g,u as D,v as f,w as re,x as A,y as a,z as s}from"./chunk-22YILWWZ.mjs";import{a as V,b as E}from"./chunk-KRLCULJA.mjs";var R=class{constructor(){this.sno=0,this.title="",this.desc="",this.active=!0}};var Oe=t=>({strike:t}),Te=(()=>{let e=class e{constructor(){this.todoDelete=new g,this.todoCheckBox=new g}ngOnInit(){}onClick(i){this.todoDelete.emit(i),console.log("onClick has been triggered")}onCheckBoxClick(i){this.todoCheckBox.emit(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-todo-item"]],inputs:{todo:"todo",i:"i"},outputs:{todoDelete:"todoDelete",todoCheckBox:"todoCheckBox"},standalone:!0,features:[y],decls:11,vars:11,consts:[[1,"my-3"],[3,"ngClass"],[1,"mb-3","form-check"],["type","checkbox",1,"form-check-input",3,"id","checked","click"],[1,"form-check-label",3,"for"],[1,"btn","btn-sm","btn-danger",3,"click"]],template:function(r,o){r&1&&(a(0,"div",0)(1,"h5",1),l(2),s(),a(3,"p",1),l(4),s(),a(5,"div",2)(6,"input",3),p("click",function(){return o.onCheckBoxClick(o.todo)}),s(),a(7,"label",4),l(8,"Completed"),s()(),a(9,"button",5),p("click",function(){return o.onClick(o.todo)}),l(10,"Delete"),s()()),r&2&&(u(1),f("ngClass",se(7,Oe,!o.todo.active)),u(1),x("Title: ",o.todo.title,""),u(1),f("ngClass",se(9,Oe,!o.todo.active)),u(1),x("Description: ",o.todo.desc,""),u(2),oe("id","todo",o.i,""),f("checked",!o.todo.active),u(1),oe("for","todo",0,""))},dependencies:[_,Ae],styles:[".strike[_ngcontent-%COMP%]{text-decoration:line-through}"]});let t=e;return t})();var He=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(d(ne),d(ie))},e.\u0275dir=C({type:e});let t=e;return t})(),mt=(()=>{let e=class e extends He{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=ve(e)))(o||e)}})(),e.\u0275dir=C({type:e,features:[D]});let t=e;return t})(),Le=new b("NgValueAccessor");var gt={provide:Le,useExisting:G(()=>Z),multi:!0};function vt(){let t=ae()?ae().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var yt=new b("CompositionEventMode"),Z=(()=>{let e=class e extends He{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!vt())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(d(ne),d(ie),d(yt,8))},e.\u0275dir=C({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&p("input",function(h){return o._handleInput(h.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(h){return o._compositionEnd(h.target.value)})},features:[B([gt]),D]});let t=e;return t})();var $e=new b("NgValidators"),We=new b("NgAsyncValidators");function qe(t){return t!=null}function ze(t){return Ce(t)?fe(t):t}function Ze(t){let e={};return t.forEach(n=>{e=n!=null?V(V({},e),n):e}),Object.keys(e).length===0?null:e}function Je(t,e){return e.map(n=>n(t))}function _t(t){return!t.validate}function Ye(t){return t.map(e=>_t(e)?e:n=>e.validate(n))}function Ct(t){if(!t)return null;let e=t.filter(qe);return e.length==0?null:function(n){return Ze(Je(n,e))}}function de(t){return t!=null?Ct(Ye(t)):null}function Vt(t){if(!t)return null;let e=t.filter(qe);return e.length==0?null:function(n){let i=Je(n,e).map(ze);return me(i).pipe(pe(Ze))}}function ue(t){return t!=null?Vt(Ye(t)):null}function ke(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function bt(t){return t._rawValidators}function Dt(t){return t._rawAsyncValidators}function le(t){return t?Array.isArray(t)?t:[t]:[]}function L(t,e){return Array.isArray(t)?t.includes(e):t===e}function Pe(t,e){let n=le(e);return le(t).forEach(r=>{L(n,r)||n.push(r)}),n}function Ge(t,e){return le(e).filter(n=>!L(t,n))}var $=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=de(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=ue(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},F=class extends ${get formDirective(){return null}get path(){return null}},P=class extends ${constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},W=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Et={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Ei=E(V({},Et),{"[class.ng-submitted]":"isSubmitted"}),Xe=(()=>{let e=class e extends W{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(d(P,2))},e.\u0275dir=C({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&re("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[D]});let t=e;return t})(),J=(()=>{let e=class e extends W{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(d(F,10))},e.\u0275dir=C({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&re("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[D]});let t=e;return t})();var N="VALID",H="INVALID",M="PENDING",T="DISABLED";function Ke(t){return(Y(t)?t.validators:t)||null}function At(t){return Array.isArray(t)?de(t):t||null}function Qe(t,e){return(Y(e)?e.asyncValidators:t)||null}function Mt(t){return Array.isArray(t)?ue(t):t||null}function Y(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Ft(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new j(1e3,"");if(!i[n])throw new j(1001,"")}function wt(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new j(1002,"")})}var q=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===N}get invalid(){return this.status===H}get pending(){return this.status==M}get disabled(){return this.status===T}get enabled(){return this.status!==T}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Pe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Pe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ge(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ge(e,this._rawAsyncValidators))}hasValidator(e){return L(this._rawValidators,e)}hasAsyncValidator(e){return L(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=M,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=T,this.errors=null,this._forEachChild(i=>{i.disable(E(V({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(E(V({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=N,this._forEachChild(i=>{i.enable(E(V({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(E(V({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===N||this.status===M)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?T:N}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=M,this._hasOwnPendingAsyncValidator=!0;let n=ze(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new g,this.statusChanges=new g}_calculateStatus(){return this._allControlsDisabled()?T:this.errors?H:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(M)?M:this._anyControlsHaveStatus(H)?H:N}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Y(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=At(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Mt(this._rawAsyncValidators)}},z=class extends q{constructor(e,n,i){super(Ke(n),Qe(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){wt(this,!0,e),Object.keys(e).forEach(i=>{Ft(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var X=new b("CallSetDisabledState",{providedIn:"root",factory:()=>K}),K="always";function St(t,e){return[...e.path,t]}function et(t,e,n=K){tt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),xt(t,e),Nt(t,e),Ot(t,e),It(t,e)}function je(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function It(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function tt(t,e){let n=bt(t);e.validator!==null?t.setValidators(ke(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Dt(t);e.asyncValidator!==null?t.setAsyncValidators(ke(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();je(e._rawValidators,r),je(e._rawAsyncValidators,r)}function xt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&it(t,e)})}function Ot(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&it(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function it(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Nt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function Tt(t,e){t==null,tt(t,e)}function kt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Pt(t){return Object.getPrototypeOf(t.constructor)===mt}function Gt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function jt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===Z?n=o:Pt(o)?i=o:r=o}),r||i||n||null}var Bt={provide:F,useExisting:G(()=>ce)},k=(()=>Promise.resolve())(),ce=(()=>{let e=class e extends F{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._directives=new Set,this.ngSubmit=new g,this.form=new z({},de(i),ue(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(i){k.then(()=>{let r=this._findContainer(i.path);i.control=r.registerControl(i.name,i.control),et(i.control,i,this.callSetDisabledState),i.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(i)})}getControl(i){return this.form.get(i.path)}removeControl(i){k.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name),this._directives.delete(i)})}addFormGroup(i){k.then(()=>{let r=this._findContainer(i.path),o=new z({});Tt(o,i),r.registerControl(i.name,o),o.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(i){k.then(()=>{let r=this._findContainer(i.path);r&&r.removeControl(i.name)})}getFormGroup(i){return this.form.get(i.path)}updateModel(i,r){k.then(()=>{this.form.get(i.path).setValue(r)})}setValue(i){this.control.setValue(i)}onSubmit(i){return this.submitted=!0,Gt(this.form,this._directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(i){return i.pop(),i.length?this.form.get(i):this.form}};e.\u0275fac=function(r){return new(r||e)(d($e,10),d(We,10),d(X,8))},e.\u0275dir=C({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(r,o){r&1&&p("submit",function(h){return o.onSubmit(h)})("reset",function(){return o.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[B([Bt]),D]});let t=e;return t})();function Be(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ue(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Ut=class extends q{constructor(e=null,n,i){super(Ke(n),Qe(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Y(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Ue(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Be(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Be(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ue(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Rt={provide:P,useExisting:G(()=>he)},Re=(()=>Promise.resolve())(),he=(()=>{let e=class e extends P{constructor(i,r,o,c,h,pt){super(),this._changeDetectorRef=h,this.callSetDisabledState=pt,this.control=new Ut,this._registered=!1,this.name="",this.update=new g,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=jt(this,c)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let r=i.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),kt(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){et(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Re.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let r=i.isDisabled.currentValue,o=r!==0&&De(r);Re.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?St(i,this._parent):[i]}};e.\u0275fac=function(r){return new(r||e)(d(F,9),d($e,10),d(We,10),d(Le,10),d(ye,8),d(X,8))},e.\u0275dir=C({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[B([Rt]),D,ge]});let t=e;return t})(),Q=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=C({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var Ht=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=S({type:e}),e.\u0275inj=w({});let t=e;return t})();var Lt=new b("NgModelWithFormControlWarning");var nt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=S({type:e}),e.\u0275inj=w({imports:[Ht]});let t=e;return t})();var rt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:X,useValue:i.callSetDisabledState??K}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=S({type:e}),e.\u0275inj=w({imports:[nt]});let t=e;return t})(),ot=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Lt,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:X,useValue:i.callSetDisabledState??K}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=S({type:e}),e.\u0275inj=w({imports:[nt]});let t=e;return t})();function $t(t,e){t&1&&(a(0,"div",9),l(1,"Enter a title"),s())}function Wt(t,e){t&1&&(a(0,"div",9),l(1,"Enter a description"),s())}var at=(()=>{let e=class e{constructor(){this.title="",this.desc="",this.titleTouched=!1,this.descTouched=!1,this.todoAdd=new g}onSubmit(){let i={sno:8,title:this.title,desc:this.desc,active:!0};this.titleTouched=!0,this.descTouched=!0,this.title.trim()!==""&&this.desc.trim()!==""&&(console.log("Form submitted!"),this.todoAdd.emit(i))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-add-todo"]],outputs:{todoAdd:"todoAdd"},standalone:!0,features:[y],decls:16,vars:4,consts:[[1,"container","my-3"],[1,"form-control",3,"ngSubmit"],[1,"mb-3"],["for","title",1,"form-label"],["type","text","name","title","id","title","aria-describedby","emailHelp",1,"form-control",3,"ngModel","ngModelChange"],["class","text-danger",4,"ngIf"],["for","desc",1,"form-label"],["type","text","name","desc","id","desc",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary"],[1,"text-danger"]],template:function(r,o){r&1&&(a(0,"div",0)(1,"h4"),l(2,"Add a todo"),s(),a(3,"form",1),p("ngSubmit",function(){return o.onSubmit()}),a(4,"div",2)(5,"label",3),l(6,"To Do Title"),s(),a(7,"input",4),p("ngModelChange",function(h){return o.title=h}),s(),A(8,$t,2,0,"div",5),s(),a(9,"div",2)(10,"label",6),l(11,"To Do Description"),s(),a(12,"input",7),p("ngModelChange",function(h){return o.desc=h}),s(),A(13,Wt,2,0,"div",5),s(),a(14,"button",8),l(15,"Add Todo"),s()()()),r&2&&(u(7),f("ngModel",o.title),u(1),f("ngIf",o.titleTouched&&!o.title),u(4),f("ngModel",o.desc),u(1),f("ngIf",o.descTouched&&!o.desc))},dependencies:[_,U,rt,Q,Z,Xe,J,he,ce]});let t=e;return t})();function qt(t,e){t&1&&(a(0,"div"),l(1,"No Todos to display"),s())}function zt(t,e){if(t&1){let n=_e();a(0,"div",6)(1,"app-todo-item",7),p("todoDelete",function(r){ee(n);let o=I(2);return te(o.deleteTodo(r))})("todoCheckBox",function(r){ee(n);let o=I(2);return te(o.toggleTodo(r))}),s()()}if(t&2){let n=e.$implicit,i=I(2);u(1),f("todo",n)("i",i.i)}}function Zt(t,e){if(t&1&&A(0,zt,2,2,"div",5),t&2){let n=I();f("ngForOf",n.todos)}}var lt=(()=>{let e=class e{constructor(){this.i=new R,this.title="",this.todos=this.loadTodosFromLocalStorage()}loadTodosFromLocalStorage(){try{if(typeof localStorage<"u"){let i=localStorage.getItem("todos");if(i!==null)return JSON.parse(i)}}catch(i){console.error("Error accessing localStorage:",i)}return[]}ngOnInit(){}deleteTodo(i){console.log(i);let r=this.todos.indexOf(i);this.todos.splice(r,1),localStorage.setItem("todos",JSON.stringify(this.todos))}addTodo(i){console.log(i);let r=this.todos.indexOf(i);this.todos.push(i),localStorage.setItem("todos",JSON.stringify(this.todos))}toggleTodo(i){console.log(i);let r=this.todos.indexOf(i);this.todos[r].active=!this.todos[r].active,localStorage.setItem("todos",JSON.stringify(this.todos))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-todos"]],standalone:!0,features:[y],decls:9,vars:3,consts:[[1,"container"],[1,"text-center","mb-3"],[3,"todoAdd"],[4,"ngIf","ngIfElse"],["elseBlock",""],["index","","as","","i","",4,"ngFor","ngForOf"],["index","","as","","i",""],[3,"todo","i","todoDelete","todoCheckBox"]],template:function(r,o){if(r&1&&(a(0,"div",0)(1,"h1",1),l(2),s(),a(3,"app-add-todo",2),p("todoAdd",function(h){return o.addTodo(h)}),s(),a(4,"h4"),l(5,"Your Todos"),s(),A(6,qt,2,0,"div",3)(7,Zt,1,1,"ng-template",null,4,be),s()),r&2){let c=Ve(8);u(2),x("To Do list",o.title,""),u(4),f("ngIf",o.todos.length===0)("ngIfElse",c)}},dependencies:[_,Me,U,Te,at]});let t=e;return t})();var dt=(()=>{let e=class e{constructor(){}ngOnInit(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[y],decls:20,vars:0,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary"],[1,"container-fluid"],["routerLink","/",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["aria-current","page","routerLink","/",1,"nav-link","active"],["routerLink","/about",1,"nav-link"],["role","search",1,"d-flex"],["type","search","placeholder","Search","aria-label","Search",1,"form-control","me-2"],["type","submit",1,"btn","btn-outline-success"]],template:function(r,o){r&1&&(a(0,"div")(1,"nav",0)(2,"div",1)(3,"a",2),l(4,"My To Do"),s(),a(5,"button",3),v(6,"span",4),s(),a(7,"div",5)(8,"ul",6)(9,"li",7)(10,"a",8),l(11,"Home"),s()(),a(12,"li",7)(13,"a",9),l(14,"About"),s()()(),a(15,"form",10),v(16,"input",11),a(17,"button",12),l(18,"Search"),s()()()()(),v(19,"router-outlet"),s())},dependencies:[_,Ie,ot,Q,J]});let t=e;return t})();var ut=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-about"]],standalone:!0,features:[y],decls:55,vars:0,consts:[[1,"container"],["role","status",1,"spinner-border","m-5"],[1,"visually-hidden"],[1,"progress"],["role","progressbar","aria-label","Example with label","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar",2,"width","25%"],["aria-label","Page navigation example"],[1,"pagination"],[1,"page-item"],["href","#",1,"page-link"],[1,"btn-group"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-danger","dropdown-toggle"],[1,"dropdown-menu"],["href","#",1,"dropdown-item"],[1,"dropdown-divider"],[1,"card",2,"width","18rem"],["src","assets/Ryuzaki.jpg","alt","Ryuzaki","height","100px",1,"card-img-top"],[1,"card-body"],[1,"card-text"]],template:function(r,o){r&1&&(a(0,"div",0)(1,"strong"),l(2,"Loading..."),s(),a(3,"div",1)(4,"span",2),l(5,"Loading..."),s()(),a(6,"div",3)(7,"div",4),l(8,"25%"),s()(),v(9,"br")(10,"br"),a(11,"nav",5)(12,"ul",6)(13,"li",7)(14,"a",8),l(15,"Previous"),s()(),a(16,"li",7)(17,"a",8),l(18,"1"),s()(),a(19,"li",7)(20,"a",8),l(21,"2"),s()(),a(22,"li",7)(23,"a",8),l(24,"3"),s()(),a(25,"li",7)(26,"a",8),l(27,"Next"),s()()()(),v(28,"br")(29,"br"),a(30,"div",9)(31,"button",10),l(32," Action "),s(),a(33,"ul",11)(34,"li")(35,"a",12),l(36,"Action"),s()(),a(37,"li")(38,"a",12),l(39,"Another action"),s()(),a(40,"li")(41,"a",12),l(42,"Something else here"),s()(),a(43,"li"),v(44,"hr",13),s(),a(45,"li")(46,"a",12),l(47,"Separated link"),s()()()(),v(48,"br")(49,"br"),a(50,"div",14),v(51,"img",15),a(52,"div",16)(53,"p",17),l(54,"One of his most noticeable features is the shadow below each of his eyes, a result of him being an insomniac."),s()()()())},dependencies:[_]});let t=e;return t})();var ct=[{path:"",component:lt},{path:"about",component:ut}];var ht={providers:[xe(ct),we()]};var Jt={providers:[Se()]},ft=Ee(ht,Jt);var Yt=()=>Fe(dt,ft),an=Yt;export{an as a};
