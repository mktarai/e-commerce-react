(this["webpackJsonpe-commerce-react"]=this["webpackJsonpe-commerce-react"]||[]).push([[0],{45:function(e,a,t){e.exports=t(60)},50:function(e,a,t){},51:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var l=t(0),c=t.n(l),n=t(19),r=t.n(n),m=(t(50),t(17)),s=t(8),o=(t(51),t(21)),i=t(62),E=t(67),u=t(68),p=t(63),d=t(42),h=t(64),b=t(43),g=t(6),N=t(7),f=Object.freeze({accessToken:"pk.eyJ1IjoibWt0MTk4NSIsImEiOiJjazl0b3Y4bjgxODE1M21tcmhqcms0b2p2In0.GetYrxM47sRKAEfw0yf7kQ"});var v=function(e){var a=e.history,t=Object(l.useState)(""),n=Object(o.a)(t,2),r=n[0],m=n[1],s=Object(l.useState)(""),v=Object(o.a)(s,2),A=v[0],k=v[1];return Object(l.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(e.coords.longitude,",").concat(e.coords.latitude,".json?access_token=").concat(f.accessToken)).then((function(e){return e.json()})).then((function(e){k(e.features[1].place_name),m(e.features[2].text)}))}),(function(){console.log("Unable to retrieve your location!")})):console.log("Geolocation is not supported by your browser!")}),[]),c.a.createElement(i.a,{fluid:!0},c.a.createElement(E.a,{bg:"light",expand:"lg",className:"fixed-top"},c.a.createElement(E.a.Brand,{href:"#home"}),c.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(u.a,{className:"mr-auto"},c.a.createElement(u.a.Link,{href:"#/"},"Home"),c.a.createElement(u.a.Link,{href:"#/login"},"Login"),c.a.createElement(u.a.Link,{href:"#/signup"},"Register")))),c.a.createElement("header",{className:"text-center",style:{marginTop:"90px"}},c.a.createElement("h1",{className:"display-3"},"e-Com"),c.a.createElement("p",null,"Discover the best food and drinks"),c.a.createElement("p",null,"in"),c.a.createElement("p",null,r)),c.a.createElement(p.a,{className:"mt-4"},c.a.createElement(d.a,null,c.a.createElement(h.a,null,c.a.createElement(h.a.Prepend,null,c.a.createElement(h.a.Text,{id:"basic-geolocation"},c.a.createElement(g.a,{icon:N.d}))),c.a.createElement(b.a,{type:"text",size:"lg",value:A,onChange:function(e){k(e.target.value)},"aria-label":"geolocation","aria-describedby":"basic-geolocation"})))),c.a.createElement(p.a,{className:"mt-1"},c.a.createElement(d.a,null,c.a.createElement(h.a,null,c.a.createElement(h.a.Prepend,null,c.a.createElement(h.a.Text,{style:{backgroundColor:"#ffffff"},id:"basic-geolocation"},c.a.createElement(g.a,{icon:N.g}))),c.a.createElement(b.a,{type:"text",size:"lg",placeholder:"Search...","aria-label":"geolocation","aria-describedby":"basic-geolocation",onFocus:function(){a.push("/search")}})))))},A=t(66);var k=function(){return Object(l.useEffect)((function(){}),[]),c.a.createElement(i.a,{fluid:!0,className:"pr-0 pl-0"},c.a.createElement(E.a,{bg:"light",expand:"lg",className:"fixed-top"},c.a.createElement(E.a.Brand,{href:"#home"},"Sign Up"),c.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(u.a,{className:"mr-auto"},c.a.createElement(u.a.Link,{href:"#/"},"Home"),c.a.createElement(u.a.Link,{href:"#/login"},"Login"),c.a.createElement(u.a.Link,{href:"#/signup"},"Register")))),c.a.createElement(p.a,{className:"mr-0 ml-0",style:{marginTop:"90px"}},c.a.createElement(d.a,null,c.a.createElement(A.a,{onSubmit:function(e){e.preventDefault()},noValidate:!0},c.a.createElement(A.a.Group,{controlId:"formBasicEmail"},c.a.createElement(A.a.Label,null,"Name"),c.a.createElement(A.a.Control,{type:"text",size:"lg"})),c.a.createElement(A.a.Group,{controlId:"formBasicEmail"},c.a.createElement(A.a.Label,null,"Phone/Email"),c.a.createElement(A.a.Control,{type:"text",size:"lg"})),c.a.createElement(A.a.Group,{controlId:"formBasicPassword"},c.a.createElement(A.a.Label,null,"Password"),c.a.createElement(A.a.Control,{type:"password",size:"lg"})),c.a.createElement(A.a.Group,{controlId:"formBasicCheckbox"},c.a.createElement(A.a.Check,{type:"checkbox",label:"I agree"})),c.a.createElement("button",{type:"submit",className:"btn btn-block btn-success"},"Create Account"),c.a.createElement(m.b,{to:"/restaurant-add",className:"btn btn-block btn-warning"},"Add Restaurant")))))},x=t(65);var y=function(e){var a=e.history;return Object(l.useEffect)((function(){}),[]),c.a.createElement(i.a,{fluid:!0,className:"pr-0 pl-0"},c.a.createElement(E.a,{bg:"light",expand:"lg",className:"fixed-top"},c.a.createElement(E.a.Brand,{href:"#home"},"Sign In"),c.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(u.a,{className:"mr-auto"},c.a.createElement(u.a.Link,{href:"#/"},"Home"),c.a.createElement(u.a.Link,{href:"#/login"},"Login"),c.a.createElement(u.a.Link,{href:"#/signup"},"Register")))),c.a.createElement(p.a,{className:"mr-0 ml-0",style:{marginTop:"90px"}},c.a.createElement(d.a,null,c.a.createElement(A.a,{onSubmit:function(e){e.preventDefault(),a.push("/home/profile")},noValidate:!0},c.a.createElement(A.a.Group,{controlId:"formBasicEmail"},c.a.createElement(A.a.Label,null,"Phone/Email"),c.a.createElement(A.a.Control,{type:"text",size:"lg"})),c.a.createElement(A.a.Group,{controlId:"formBasicPassword"},c.a.createElement(A.a.Label,null,"Password"),c.a.createElement(A.a.Control,{type:"password",size:"lg"})),c.a.createElement(x.a,{variant:"dark",type:"submit",size:"lg",block:!0},"Login")))))};var C=function(e){var a=e.history;Object(l.useEffect)((function(){}),[]);var t=function(){a.push("/restaurant-list")};return c.a.createElement(i.a,{fluid:!0},c.a.createElement(E.a,{bg:"light",expand:"lg",className:"fixed-top"},c.a.createElement(E.a.Brand,{href:"#home"},"Search"),c.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(u.a,{className:"mr-auto"},c.a.createElement(u.a.Link,{href:"#/"},"Home"),c.a.createElement(u.a.Link,{href:"#/login"},"Login"),c.a.createElement(u.a.Link,{href:"#/signup"},"Register")))),c.a.createElement(p.a,{style:{marginTop:"90px"}},c.a.createElement(d.a,null,c.a.createElement(h.a,null,c.a.createElement(h.a.Prepend,null,c.a.createElement(h.a.Text,{style:{backgroundColor:"#ffffff"},id:"basic-geolocation"},c.a.createElement(g.a,{icon:N.g}))),c.a.createElement(b.a,{type:"text",size:"lg",placeholder:"Search...","aria-label":"geolocation","aria-describedby":"basic-geolocation"})))),c.a.createElement("div",{className:"row mt-4"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"media mb-2",onClick:t},c.a.createElement("img",{src:"https://via.placeholder.com/64",className:"mr-3",alt:"..."}),c.a.createElement("div",{className:"media-body"},c.a.createElement("h5",{className:"mt-0"},"Rolls - Delivery"),"Cuisine")),c.a.createElement("div",{className:"media mb-2",onClick:t},c.a.createElement("img",{src:"https://via.placeholder.com/64",className:"mr-3",alt:"..."}),c.a.createElement("div",{className:"media-body"},c.a.createElement("h5",{className:"mt-0"},"Rolls - Dine Out"),"Cuisine")))))};var w=function(){return c.a.createElement(i.a,{fluid:!0},c.a.createElement(E.a,{bg:"light",expand:"lg",className:"fixed-top"},c.a.createElement(E.a.Brand,{href:"#home"},"Restaurants"),c.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(u.a,{className:"mr-auto"},c.a.createElement(u.a.Link,{href:"#/"},"Home"),c.a.createElement(u.a.Link,{href:"#/login"},"Login"),c.a.createElement(u.a.Link,{href:"#/signup"},"Register")))),c.a.createElement("div",{className:"row",style:{marginTop:"90px"}},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"card mb-2"},c.a.createElement("img",{src:"https://via.placeholder.com/1024x512",className:"card-img-top",alt:"..."}),c.a.createElement("div",{className:"card-body pt-1 pb-1"},c.a.createElement("h5",{className:"card-title mb-0"},"Kabita's Kitchen"),c.a.createElement("p",{className:"card-text text-danger mb-0"},c.a.createElement("small",null,c.a.createElement(g.a,{icon:N.i})),c.a.createElement("small",null,c.a.createElement(g.a,{icon:N.i})),c.a.createElement("small",null,c.a.createElement(g.a,{icon:N.i})),c.a.createElement("small",null,c.a.createElement(g.a,{icon:N.i})),c.a.createElement("small",null,c.a.createElement(g.a,{icon:N.j})),c.a.createElement("small",{className:"ml-2 text-muted"},"3.5 (1779 Delivery Votes)")),c.a.createElement("p",{className:"card-text mb-0"},c.a.createElement("small",{className:"text-muted"},"Rolls, Fast Food")),c.a.createElement("p",{className:"card-text"},c.a.createElement("small",{className:"text-muted"},"Rs 100 for one (* 39 mins)"))),c.a.createElement("div",{className:"card-footer text-muted"},"Safety measures followed here")),c.a.createElement("div",{className:"card mb-2"},c.a.createElement("img",{src:"https://via.placeholder.com/1024x512",className:"card-img-top",alt:"..."}),c.a.createElement("div",{className:"card-body pt-1 pb-1"},c.a.createElement("h5",{className:"card-title mb-0"},"Rolls On Wheels"),c.a.createElement("p",{className:"card-text text-danger mb-0"},c.a.createElement("small",null,c.a.createElement(g.a,{icon:N.i})),c.a.createElement("small",null,c.a.createElement(g.a,{icon:N.i})),c.a.createElement("small",null,c.a.createElement(g.a,{icon:N.i})),c.a.createElement("small",null,c.a.createElement(g.a,{icon:N.i})),c.a.createElement("small",null,c.a.createElement(g.a,{icon:N.j})),c.a.createElement("small",{className:"ml-2 text-muted"},"4.3 (7422 Delivery Votes)")),c.a.createElement("p",{className:"card-text mb-0"},c.a.createElement("small",{className:"text-muted"},"Rolls")),c.a.createElement("p",{className:"card-text"},c.a.createElement("small",{className:"text-muted"},"Rs 100 for one (* 52 mins)"))),c.a.createElement("div",{className:"card-footer text-muted"},"Safety measures followed here")))))};var B=function(){return c.a.createElement(i.a,{fluid:!0},c.a.createElement(E.a,{bg:"light",expand:"lg",className:"fixed-top"},c.a.createElement(E.a.Brand,{href:"#home"},"Restaurant: Add"),c.a.createElement(E.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(E.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(u.a,{className:"mr-auto"},c.a.createElement(u.a.Link,{href:"#/"},"Home"),c.a.createElement(u.a.Link,{href:"#/login"},"Login"),c.a.createElement(u.a.Link,{href:"#/signup"},"Register")))),c.a.createElement("form",{noValidate:!0,style:{marginTop:"90px"}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Restaurant Name"),c.a.createElement("input",{type:"text",name:"restaurantName",className:"form-control"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"City"),c.a.createElement("select",{name:"restaurantCity",className:"custom-select"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Are you the owner or manager of this place"),c.a.createElement("select",{name:"restaurantCity",className:"custom-select"},c.a.createElement("option",{value:"No"},"I'm not the owner/manager"),c.a.createElement("option",{value:"Yes"},"I'm the owner/manager"))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Owner Phone"),c.a.createElement("input",{type:"tel",name:"ownerPhone",className:"form-control"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Owner Email"),c.a.createElement("input",{type:"email",name:"ownerEmail",className:"form-control"})),c.a.createElement("div",{className:"form-row"},c.a.createElement("div",{className:"form-group col-4"},c.a.createElement("label",{htmlFor:""},"STD"),c.a.createElement("input",{type:"text",name:"std",className:"form-control"})),c.a.createElement("div",{className:"form-group col-8"},c.a.createElement("label",{htmlFor:""},"Phone Number"),c.a.createElement("input",{type:"tel",name:"phoneNumber",className:"form-control"}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Opening Status"),c.a.createElement("select",{name:"openingStatus",className:"custom-select"},c.a.createElement("option",{value:"Yes"},"This place is already open"),c.a.createElement("option",{value:"No"},"This place is opening soon"))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Address/Landmark"),c.a.createElement("textarea",{name:"addressOrLandmark",className:"form-control"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Alcohol"),c.a.createElement("select",{name:"restaurantCity",className:"custom-select"},c.a.createElement("option",{value:"No"},"Serves Alcohol"),c.a.createElement("option",{value:"Yes"},"Doesn't serve Alcohol"))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Services"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"form-check form-check-inline"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox1",value:"option1"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox1"},"Breakfast")),c.a.createElement("div",{className:"form-check form-check-inline"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox2",value:"option2"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox2"},"Lunch")),c.a.createElement("div",{className:"form-check form-check-inline"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox3",value:"option3"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox3"},"Dinner")),c.a.createElement("div",{className:"form-check form-check-inline"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox3",value:"option3"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox3"},"Cafe")),c.a.createElement("div",{className:"form-check form-check-inline"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox3",value:"option3"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox3"},"Nightlife"))))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Seating"),c.a.createElement("select",{name:"restaurantCity",className:"custom-select"},c.a.createElement("option",{value:"Yes"},"Seating available"),c.a.createElement("option",{value:"No"},"No seating available"))),c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"form-check form-check-inline"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox1",value:"option1"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox1"},"Indoor Seating")),c.a.createElement("div",{className:"form-check form-check-inline"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox2",value:"option2"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox2"},"Outdoor Seating"))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Payment"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"form-check form-check-inline"},c.a.createElement("input",{className:"form-check-input",type:"radio",name:"payment",id:"inlineCheckbox1",value:"option1"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox1"},"Cash Only")),c.a.createElement("div",{className:"form-check form-check-inline"},c.a.createElement("input",{className:"form-check-input",type:"radio",name:"payment",id:"inlineCheckbox2",value:"option2"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox2"},"Cards and cash"))))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Cuisines"),c.a.createElement("input",{type:"text",name:"cuisines",className:"form-control"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Timings"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"form-check form-check-inline"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox1",value:"option1"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox1"},"Mon")),c.a.createElement("div",{className:"form-check form-check-inline"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox2",value:"option2"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox2"},"Tue")),c.a.createElement("div",{className:"form-check form-check-inline"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox3",value:"option3"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox3"},"Wed")),c.a.createElement("div",{className:"form-check form-check-inline"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox3",value:"option3"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox3"},"Thur")),c.a.createElement("div",{className:"form-check form-check-inline"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox3",value:"option3"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox3"},"Fri")),c.a.createElement("div",{className:"form-check form-check-inline"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox3",value:"option3"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox3"},"Sat")),c.a.createElement("div",{className:"form-check form-check-inline"},c.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox3",value:"option3"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"inlineCheckbox3"},"Sun")))),c.a.createElement("div",{className:"row mt-2"},c.a.createElement("div",{className:"col-4"},c.a.createElement("input",{type:"time",className:"form-control"})),c.a.createElement("div",{className:"col-2"},"to"),c.a.createElement("div",{className:"col-4"},c.a.createElement("input",{type:"time",className:"form-control"})),c.a.createElement("div",{className:"col-2"},c.a.createElement("a",{href:"#"},"+")))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Restaurant Email"),c.a.createElement("input",{type:"email",name:"restaurantEmail",className:"form-control"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:""},"Restaurant Website"),c.a.createElement("input",{type:"text",name:"restaurantWebsite",className:"form-control"})),c.a.createElement("button",{type:"submit",className:"btn btn-block btn-success"},"Add Restaurant")))};var F=function(){return c.a.createElement("div",{className:"container-fluid mb-3",style:{paddingLeft:"5px",paddingRight:"5px"}},c.a.createElement("div",{className:"card mt-2"},c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAN20lEQVR4nO2de1AUVxrFTw+I4gNUhCLEIKggj6iIxjWQEDGu1rpYZtEkRskGY9W6ViWWu26sqIvBqFlI4jMm6mZjxSWGbCpuRUOCr/g20ZVCMT6jYiDhHQFFGOQx3/7RqPRMz0zPTHffnqFP1e8fYO5895xLz/Tt27cBXbp06dKlq0uJA9AHQEgHfTp+pssD1APAcAAzACwD8G8A3wP4EUAFgAYAJgBkhqnjdxUdf/t9x2uXAZgO4FEA3VXshy6JCgGQBuAjAFcBtMMyXLlo73iPjwDMBvCQCv3TZabuAJ4BsBnAZSgXtlQuAfgAwDQAPgr2u8srAcAWALVgH7o1boIfmI8r5EGX00AAb4A/7LIO11F+BJAB4GHZXekCGgLgXwDugn2QrnIXwFYAg2V1yEMVC2AHgDawD05u2gDkAIiWzS0PUhiALyB+euZpmAD8B0CoHMa5u3zAn2c3gX0watMI4HUA3Vx20U01EcAVsA+CNRcBJLvopVupL4BcsDdea+QA8HPBV7fQWAA3wN5srXINwGin3dW4/gKgBexN1jp3AbzqpMeaVD8Au8DeWHfjCwD+TvitKYXDPWfxtMJluPHp4kjwl1ZZm+ju/AJ+gsyt9BSAerA3z1OoBZDoUAIM9QcARrA3zdNoApDiQA5MNA2eOY+vFVoB/F5yGiorCfp/vho0QoPrDUZA/8xXk5sAYiQlo4LCAZSDvSldjZ8BPCIhH0XlD37lC2szuioXwS9pZ6adIkXpqEuu3ZQU0qsSC9RRnj/ZyUp2jYZnrNfzFIzgv4irIn8A1xXukI7jXAHQ20Zusmk7g87pSOOfNnKTRUka6KTTGAwG8vb2VvU9OY5T8z1NAMbZTNAFeQM4r1JHZCEyMpIyMjLo4MGDVF1dTffU2NhIZ86coffff58mTZpEXl5eirx/XFwclZSUUEtLC2VkZKjV70IAXtIidUyvqdQBlxk9ejTl5+eTVF2/fp3mzJlDBoNB1jp27twpeJ/AwEC1PJB9RdFAAHdUKt5punfvTmvWrCGTySQ5/M767rvvKDw8XLZ6Dhw4IGh/6NChanlRDyDYkYDtaYdKhTtN//796dixY1bDbW5uphs3btC1a9eotrbW6t/V1tbSE0884e4DgMDfwi6LIqDsPfcu4+fnRwUFBRZhlpSU0NKlSyk2Ntbi8B4cHExpaWl08OBBi9c1NjZSQkKCuw+AVgCDHMjZqj5SsWiH4TiOdu3aJTC6tbWVli5dSj4+PpLamDhxIpWWlgraqK6upoEDB0quw9/fn8aNGyfg9OnTgjZnzJgh+L0KA+IDR8M2Vyg0vpR77ty5ApONRiNNmjTJ4XaCgoKoqKhI0FZ+fj5xHGf3tdHR0TY/VmxJ4bODZri4i8l7agXpDL1796aamhqBoTNnznS6vZCQEKqqqhK0N2XKFLuvW716tVPhExHV1dUp7dMahxLvpCBofIXPggULBGZ++eWXLreZlpYmaPPYsWN2X/Piiy86PQBOnDihtE93AARITr2T/sYiVEcoLCwUmPnYY4+53KaXlxcVFxcL2h0yZIjN13AcR/Pnz6fc3Fz67LPP7lNZWSloJy8vT/D7jRs3UkhIiBpeLZAe+wOdYxWsFAIDAwXmXr9+XdLntRSysrIEbc+fP9+pdhifBXSmwE7WFopjVKhknn76aYG5O3bskK3tadOmCdreunWruw8AgoM7k6xlWKgkZs+eLTA3KytLtrbj4+MFbe/evdsTBsA/bAXeWV4AKhkWKon09HSBuatWrZKt7eHDhwvazs/Pd6qd/fv3C9oZPHgwS89KARisx/5Av2UZrFTMD9ObN2+Wre0JEyYI2v7000+damfRokX327h48aJiVx0d4CnrsT/QO4yLlERUVJQgJDlPpxYuXChoe/ny5U61w3Ecpaam0sKFC2nAgAHMPQOwymrqnVSggULtYjAYBJM2ra2tsl1uNT90JyUlMe+vTJwQj/yB+kLjF346s2nTJkFQckyrxsbGCtosKytTfRWRgrTAzrrBZzRQpGSio6MF1/4bGhooLCzM6fYMBgN9++23ggGwbNky5v2Umd+JJt+hjRoo0CG2bdsmCOzs2bPUt29fh9vhOM5iAqisrIz69OnDvI8y84549LwKNVCgQwQEBFBZWZkguHPnzlFERITkNnx9fWnLli1krpSUFOb9U4CTVrIHBzfdsXPcuHHU1NQkCM9oNFJWVpbNa/q+vr700ksvWcz9ExGtXLmSeb8U4pa1ATBIA8U5zeTJky0GwT0VFhbShx9+SJmZmZSRkUHr1q2jffv2UWNjo+jfb9iwQbbrChpFdL3gJA0U5hJjxoyhGzduiIYqRS0tLbRgwQJPD59gZULII2729Pf3p/Xr11NLS4tD4R85coRGjBjBvH6VEL2ZdJMGCpON0NBQeuutt0Q/3+/p9u3blJubS8nJyV3hv74zoquE9mqgMEUICwujlJQUevnll2nevHn03HPP0ahRozxpgsdRdkNEpzVQmI46HIeILmmgMB11KIKIftFAYTrqUAwR3dJAYTrqUAMRuc1VQB2XaYaZemqgKB11ETysylcDBSlCjx49KDQ0lIYNG0YjR46k+Ph4iomJofDwcOrXr19XO//vjDfM5NabPAcEBNDUqVMpMzOTPv/8c/rhhx+orq7O7gyg0Wik4uJi2rNnD61du5bS09MpIiLC0weG0Tx8AKjTQGGSMRgMlJiYSNnZ2XT+/HmHpn2lqKqqinJycujZZ5/1xDUBVWID4GcNFGaXQYMG0YoVK6ikpET20K2pqamJtm/fTklJSZ5yZLgmNgAuaqAwq8TGxlJOTg61tbVJDq6uro4uX75Mx48fp/3791NeXh599dVXtHfvXjp8+DAVFRVRRUUFtbe3S27z9OnTNH36dNn3E1KZM2ID4JQGCrMgKCiItm7dajOktrY2OnnyJK1fv57S0tIoPj6e/Pz8JL+Hj48PRUZGUkpKCi1fvpzy8vKovr7e5kA4deqULLuIMOKo2AD4WgOF3YfjOJo1a5bVjRcaGxspNzeXUlNTyd/fX/b39/b2poSEBMrOzrbYPaSzNm3aRL169WLul4P8V2wArNNAYQTwS7VycnJEDb969Sq98sorqn4xMxgMNHnyZPrmm29Ea7py5QpFRUUx980BssQGwJ81UBgFBgbSqVOnLEwuLy+nuXPnMr+EO3bsWDp8+LBFffX19TRhwgTm/klkjtgASGZdWEBAgMU+PUT87dlKHOadheM4Sk9Pp1u3bgnqNBqNlJyczLw+CSSIDYAQlkV169aNjh49amHoCy+8wNosq0RGRtKFCxcENTc0NFB0dDTz2uxgdcuY26yKevvttwVG3rlzh8aPH8/aKLsEBARY7FF46dIl6tmzJ/ParPCrePS8vmdRVFxcnOA0z2Qy0dSpU1kbJZmgoCCLianMzEzmdVnhiGjyHcpmUZT5xs7r1q1jbZLDJCYmWnx8qbg5tCO8KRb8PU1Wu6CIiAiBcTdv3nTbufdPPvlE0JclS5Ywr0mE8SK531dPqLwz6OLFiwWmZWdnszbIacaMGSPoS0FBAfOazGgC0F0kd4GOqVlUXl6ewDS5dupmAcdxVFFRcb8v7e3tDk1Jq8AB8ciFWqFmUeaXct318H8P8+8zMTExzGvqxFLRxM2UoGZR5eXl981qbW11+8ut5t8DnnzySeY1dWK0aOJm4qDiY+E6b6fa3NzM2iCX+fjjjwUDQENzGZdE07Yi1T4G9AGgGpIO//c0RK3C9AGgCibwz35wSCfUKE4fAKpwyFrItjRPjeL0AaAKopd/7akPVFgprA8AxfkVQC9rIdvTm0oXqA8Axfm79XjtKwBAg5IF6gNAUerBP+3dJSm6ebQ+ABRF0ubQ9hQMBR8epQ8AxbgDYICtYB3RBqUKNX9MW1tbm1tjrsTERFYDIFuu8AF+F/EqJQo13+vXk1RTU0O+vr4swi8DfxYnq/6oRLHBwcH0008/sc5KdrW3t1Nqaiqr//7nZc7+vo4oUXBwcDBt27aNSktLqbKy0q2pqKigQ4cOsXzIxD6ZMxfoUfBPpWbVOR3b3AUQaTU9mcRk4aiOJGwu+JRLPgD+x6BzOrY5AZFtX5RSOPhZJtad1uG5CeARm4kpoFQZCtdxHROAFDtZKab3JBSooyzv2k1JQflApYUjOqIchtl+fyzUD8AFsDejq3EWMlzpk0sDwT+cmLUpXYViAA9JSkZFRYFffcLaHE+nGkCExExU12/AX4ZkbZKnchvAGMlpMNJY8NuRszbL06iGxDt7tKBhAErA3jRPoRgaPuxb08MAzoO9ee7OWWjwC59U9YPKt5t7GIegoVM9Z9UNwFqwN9OdMIG/6qraxR01NA1ALdibq3V+BTDFSY81r0FgtBOZm3Ac/KSaR6sbgJXgV6+wNlwrNAN4Ax52yLenYQD2g735rMkHMNRFL91az4Nfxsw6CLX5GcB0GfzzCPUBv4W5ovchaoTbAFbDhTt2PVn9wW9P41YPsJLITfCf8/1kc8uD5QfgdfDz36yDc5VKAIsB9JbVoS4iXwCzAeyFez3atg3AHgCzOvqgSwaFAHgNwDmwD9gaRQAWgb+jWpeCGg7e6K/B8BkH4J+4ngfgr+DvmtLFQN4AHge/D95e8KdXJsgftgn8src9AJaAX/zipUL/dDmhXgBGAZgJ/pv3DvATLsfBH6aLwS9audtBTcfPijr+Jr/jNW90tBEHDz1t+z9bYao+8Eb+awAAAABJRU5ErkJggg==",alt:"..."})),c.a.createElement("div",{className:"card-body text-center"},c.a.createElement("h5",{className:"card-title"},"Monish Kumar Tarai"),c.a.createElement("p",{className:"card-text"},c.a.createElement(g.a,{icon:N.c,className:"text-muted"})," ",c.a.createElement("small",{className:"text-muted"},"talk2monish@outlook.com")),c.a.createElement("p",{className:"card-text"},c.a.createElement(g.a,{icon:N.e,className:"text-muted"})," ",c.a.createElement("small",{className:"text-muted"},"+91 9711495838"))),c.a.createElement("ul",{className:"list-group list-group-flush"},c.a.createElement("li",{className:"list-group-item list-group-item-action list-group-item-secondary"},c.a.createElement("div",{className:"d-flex w-100 justify-content-between"},c.a.createElement("h5",{className:"mb-1"},"Addresses"),c.a.createElement("small",null,c.a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABy0lEQVRIie2Uu24TURCGDwEqUnFRusgSEijhZjdAA7KERANvQJNHoKPdisaWz/zf7BYukNLiKg0NBYqiFJAuNWCeIFIUAg5IKDRnJWPhzdppM9JWM/N/c+ayIZzZLCbJgB1gc/KTtB9jbJwKAOxU+FqSvp8KAmyGEEK3270KvAE2gFbpjzE2gcO5ISUgiT+VtAwcjMeY2V1JP+aCjAE2JC33+/2LwN5knLvfAX7ODBkDtIADYA948b9YSbdnhpSAupbn+S1Jo9oQSfvjQ61Z1CpwVAsSY2ykVWzOAokxrgC/akEkPQEOJQ2BXXf/CDw6Kc/Mbkr6XQkBrkv6FGNsxhgb7t42syXgA/DsJEie5zckDasAb8v2uHtbUhZCCEVRLAJ/BoPB+SoAcE3SaGqAmW2XlQMv3X3d3dvpgnPg3rTcdP3fKtspaaus3N3X008uA9bcvWNmD6aJp5lVz0rSezNbCuHfFmVZtgDsAvcnc/I8v+LuX+ssQjCzx+7+riiKxdSWtSzLFtz9tSSTNAJWy/her3cZ+FJLfKyi52k189SWbeDV8fHxuRhjIx3VShL/PJN4aVmWXUgveNjpdC6N+9IxDoGjucTPbNL+AlKwUX6iRC+XAAAAAElFTkSuQmCC",alt:""})))),c.a.createElement("li",{className:"list-group-item list-group-item-action"},c.a.createElement("div",{className:"d-flex w-100 justify-content-between"},c.a.createElement("h5",{className:"mb-1"}),c.a.createElement("small",null,"Work")),c.a.createElement("p",{className:"mb-1"},"UBN Software Solutions Pvt Ltd"),c.a.createElement("p",{className:"mb-1"},"1st Floor, Rajdhani Offset Printing Press"),c.a.createElement("p",{className:"mb-1"},"Mancheswar Industrial Estate"),c.a.createElement("p",{className:"mb-1"},"Bhubaneswar-751010")),c.a.createElement("li",{className:"list-group-item list-group-item-action"},c.a.createElement("div",{className:"d-flex w-100 justify-content-between"},c.a.createElement("h5",{className:"mb-1"}),c.a.createElement("small",null,"Home")),c.a.createElement("p",{className:"mb-1"},"C/O- Late Dr Sashi Bhusan Mohanty"),c.a.createElement("p",{className:"mb-1"},"Near Maa Barahi Mandir"),c.a.createElement("p",{className:"mb-1"},"Kesharpur"),c.a.createElement("p",{className:"mb-1"},"Cuttack-753001")))))};var R=function(){return c.a.createElement("div",{className:"container-fluid mb-3",style:{paddingLeft:"5px",paddingRight:"5px"}},c.a.createElement("div",{className:"card mt-2"},c.a.createElement("div",{className:"card-body pb-0 pt-2"},c.a.createElement("div",{className:"media mb-2"},c.a.createElement("img",{src:"https://via.placeholder.com/48",className:"mr-3",alt:"..."}),c.a.createElement("div",{className:"media-body"},c.a.createElement("h5",{className:"mt-0"},"Bawarchi Restaurant"),"Jaydev Vihar, Bhubaneswar"))),c.a.createElement("ul",{className:"list-group list-group-flush"},c.a.createElement("li",{className:"list-group-item list-group-item-action"},c.a.createElement("p",{className:"mb-1"},"Items"),c.a.createElement("small",null,"1 x Chicken Manchurian with Chicken Fried Rice"),c.a.createElement("p",{className:"mb-1"},"Ordered On"),c.a.createElement("small",null,"06 Mar 2020 @ 12:48 PM"),c.a.createElement("p",{className:"mb-1"},"Total Amount"),c.a.createElement("small",null,"Rs 112.05"))),c.a.createElement("div",{className:"card-footer text-muted text-right"},c.a.createElement(g.a,{icon:N.f})," Repeat Order")),c.a.createElement("div",{className:"card mt-2"},c.a.createElement("div",{className:"card-body pb-0 pt-2"},c.a.createElement("div",{className:"media mb-2"},c.a.createElement("img",{src:"https://via.placeholder.com/48",className:"mr-3",alt:"..."}),c.a.createElement("div",{className:"media-body"},c.a.createElement("h5",{className:"mt-0"},"Bawarchi Restaurant"),"Jaydev Vihar, Bhubaneswar"))),c.a.createElement("ul",{className:"list-group list-group-flush"},c.a.createElement("li",{className:"list-group-item list-group-item-action"},c.a.createElement("p",{className:"mb-1"},"Items"),c.a.createElement("small",null,"1 x Chicken Manchurian with Chicken Fried Rice"),c.a.createElement("p",{className:"mb-1"},"Ordered On"),c.a.createElement("small",null,"06 Mar 2020 @ 12:48 PM"),c.a.createElement("p",{className:"mb-1"},"Total Amount"),c.a.createElement("small",null,"Rs 112.05"))),c.a.createElement("div",{className:"card-footer text-muted text-right"},c.a.createElement(g.a,{icon:N.f})," Repeat Order")),c.a.createElement("div",{className:"card mt-2"},c.a.createElement("div",{className:"card-body pb-0 pt-2"},c.a.createElement("div",{className:"media mb-2"},c.a.createElement("img",{src:"https://via.placeholder.com/48",className:"mr-3",alt:"..."}),c.a.createElement("div",{className:"media-body"},c.a.createElement("h5",{className:"mt-0"},"Bawarchi Restaurant"),"Jaydev Vihar, Bhubaneswar"))),c.a.createElement("ul",{className:"list-group list-group-flush"},c.a.createElement("li",{className:"list-group-item list-group-item-action"},c.a.createElement("p",{className:"mb-1"},"Items"),c.a.createElement("small",null,"1 x Chicken Manchurian with Chicken Fried Rice"),c.a.createElement("p",{className:"mb-1"},"Ordered On"),c.a.createElement("small",null,"06 Mar 2020 @ 12:48 PM"),c.a.createElement("p",{className:"mb-1"},"Total Amount"),c.a.createElement("small",null,"Rs 112.05"))),c.a.createElement("div",{className:"card-footer text-muted text-right"},c.a.createElement(g.a,{icon:N.f})," Repeat Order")))};var L=function(e){var a=e.match,t=Object(l.useState)(!1),n=Object(o.a)(t,2),r=n[0],i=n[1];return Object(l.useEffect)((function(){}),[]),Object(l.useEffect)((function(){}),[r]),c.a.createElement("div",{id:"wrapper",className:"d-flex ".concat(!0===r?"toggled":"")},c.a.createElement("div",{className:"bg-light border-right",id:"sidebar-wrapper"},c.a.createElement("div",{className:"sidebar-heading"},"e-Com"),c.a.createElement("div",{className:"list-group list-group-flush"},c.a.createElement("a",{href:"#",className:"list-group-item list-group-item-action bg-light"},c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:"data:image/png;base64,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",alt:"..."}))),c.a.createElement(m.b,{to:"/home/orders-list",className:"list-group-item list-group-item-action bg-light"},c.a.createElement(g.a,{icon:N.b})," Your Orders"),c.a.createElement("a",{href:"#",className:"list-group-item list-group-item-action bg-light"},c.a.createElement(g.a,{icon:N.h})," Logout"))),c.a.createElement("div",{id:"page-content-wrapper"},c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light border-bottom"},c.a.createElement(g.a,{icon:N.a,size:"2x",className:"text-muted",id:"menu-toggle",onClick:function(){i(!r)}})),c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"".concat(a.path,"/profile"),component:F}),c.a.createElement(s.a,{path:"".concat(a.path,"/orders-list"),component:R}))))};var D=function(){return c.a.createElement(m.a,null,c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/",component:v}),c.a.createElement(s.a,{path:"/search",component:C}),c.a.createElement(s.a,{path:"/restaurant-list",component:w}),c.a.createElement(s.a,{path:"/restaurant-add",component:B}),c.a.createElement(s.a,{path:"/login",component:y}),c.a.createElement(s.a,{path:"/signup",component:k}),c.a.createElement(s.a,{path:"/home",component:L})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.ce0ee795.chunk.js.map