import{Ha as p,ha as o,p as n,s}from"./chunk-63JWLWVQ.js";var c=(()=>{let r=class r{constructor(t){this.http=t,this.apiUrl=`${p.apiUrl}/api/notes`}getAllNotes(){return this.http.get(this.apiUrl)}getNotesByOwner(t){return this.http.get(`${this.apiUrl}/owner/${t}`)}getNoteById(t){return this.http.get(`${this.apiUrl}/${t}`)}createNote(t){return this.http.post(this.apiUrl,t)}updateNote(t){return this.http.put(`${this.apiUrl}/${t._id}`,t)}deleteNote(t){return this.http.delete(`${this.apiUrl}/${t}`)}};r.\u0275fac=function(i){return new(i||r)(s(o))},r.\u0275prov=n({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})();var f=(()=>{let r=class r{constructor(t){this.http=t,this.apiUrl=`${p.apiUrl}/api/friends`}getAllFriends(){return this.http.get(this.apiUrl)}getFriendsByUsername(t){return this.http.get(`${this.apiUrl}/username/${t}`)}createFriend(t){return this.http.post(this.apiUrl,t)}deleteFriendByUsername(t,i){return this.http.delete(`${this.apiUrl}/username/${t}/friend/${i}`)}};r.\u0275fac=function(i){return new(i||r)(s(o))},r.\u0275prov=n({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})();export{c as a,f as b};
