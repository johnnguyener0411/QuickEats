(this.webpackJsonpquickeats=this.webpackJsonpquickeats||[]).push([[0],{35:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_CSCE470_QuickEats_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(13),C_CSCE470_QuickEats_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__),_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(30),_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(20),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);function match(e,t){if(t.includes(" "))return e.includes(t);for(var i=e.split(" "),r=0;r<i.length;r++)if(i[r]==t)return!0;return!1}function Vsm(props){var json=__webpack_require__(52),json1=__webpack_require__(53),userQuery=props.query;console.log("vsm");for(var scoreMap=new Map,timeMap=new Map,instructions,ingredients,_i=0,_Object$entries=Object.entries(json);_i<_Object$entries.length;_i++){var _Object$entries$_i=Object(C_CSCE470_QuickEats_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_Object$entries[_i],2),key=_Object$entries$_i[0],value=_Object$entries$_i[1],score=0;try{for(var i=0;i<userQuery.length;i++)for(var j=0;j<value.ingredients.length;j++)if(match(value.ingredients[j],userQuery[i])){score+=1;break}if(0==score)continue;instructions=value.instructions;var temp=instructions.replaceAll("."," ");temp=temp.replaceAll(","," "),temp=temp.replaceAll("!"," "),temp=temp.replaceAll("?"," "),temp=temp.replaceAll("-"," "),temp=temp.split(" ");for(var time=0,_i2=0;_i2<temp.length;_i2++)"minutes"==temp[_i2]?time+=parseInt(temp[_i2-1]):"hour"==temp[_i2]?"/"==temp[_i2-1][1]?time+=60*eval(temp[_i2-1]):time+=60:"hours"==temp[_i2]&&("/"==temp[_i2-1][1]?(time+=60*eval(temp[_i2-1]),isNaN(temp[_i2-2])||(time+=60*eval(temp[_i2-2]))):time+=60*eval(temp[_i2-1]));score-=.5*(value.ingredients.length-score),0==time||isNaN(time)||(score+=eval(1/time),scoreMap.set(key,score),timeMap.set(key,time))}catch(error){}}for(var keyList=[],scoreList=[],timeList=[],titleList=[],ingredientsList=[],instructionsList=[],x,numResults=scoreMap.size,_i3=0;_i3<numResults;_i3++){x=Object(C_CSCE470_QuickEats_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(scoreMap.entries()).reduce((function(e,t){return t[1]>e[1]?t:e}));var time=timeMap.get(x[0]);try{for(var tagsIds=[],_i4=0;_i4<json[x[0]].ingredients.length;_i4++){var _temp=json[x[0]].ingredients[_i4].toString();tagsIds.push(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{padding:"2px"},children:[" ",_temp," "]},_i4))}ingredientsList.push(tagsIds),instructionsList.push(json[x[0]].instructions),titleList.push(json[x[0]].title)}catch(error){}try{for(var _tagsIds=[],_i5=0;_i5<json1[x[0]].ingredients.length;_i5++){var _temp2=json1[x[0]].ingredients[_i5].toString();_tagsIds.push(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{padding:"2px"},children:[" ",_temp2," "]},_i5))}ingredientsList.push(_tagsIds),instructionsList.push(json1[x[0]].instructions),titleList.push(json1[x[0]].title)}catch(error){}keyList.push(x[0]),scoreList.push(x[1]),timeList.push(time),scoreMap.delete(x[0])}return 0==numResults?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.a,{style:{color:"black",margin:"50px"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__.a,{style:{backgroundColor:"#3f51b5",color:"#fff",marginBottom:"20px"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{fontSize:"20px",paddingLeft:"10px",paddingRight:"10px"},children:" Sorry, we did not find any recipes that include any of your ingredients. Please try again with different ingredients. "})})}):1==numResults?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.a,{style:{color:"black",margin:"50px"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__.a,{style:{backgroundColor:"#3f51b5",color:"#fff",marginBottom:"20px"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h1",{style:{fontSize:"25px"},children:[" Recipe Title: ",titleList[0]," "]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{paddingBottom:"10px"},children:[" ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"Ingredients:"})," ",ingredientsList[0],"  "]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{paddingBottom:"10px"},children:[" ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"Time to Prepare:"})," ",timeList[0]," minutes"]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{paddingBottom:"10px"},children:[" ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"Instructions:"})," ",instructionsList[0]]})]})}):2==numResults?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.a,{style:{color:"black",margin:"50px"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__.a,{style:{backgroundColor:"#3f51b5",color:"#fff",marginBottom:"20px"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h1",{style:{fontSize:"25px"},children:[" Recipe Title: ",titleList[0]," "]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{paddingBottom:"10px"},children:[" ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"Ingredients:"})," ",ingredientsList[0],"  "]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{paddingBottom:"10px"},children:[" ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"Time to Prepare:"})," ",timeList[0]," minutes"]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{paddingBottom:"10px"},children:[" ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"Instructions:"})," ",instructionsList[0]]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__.a,{style:{backgroundColor:"#3f51b5",color:"#fff",marginBottom:"20px"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h1",{style:{fontSize:"25px"},children:[" Recipe Title: ",titleList[1]," "]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{paddingBottom:"10px"},children:[" ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"Ingredients:"})," ",ingredientsList[1]," "]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{paddingBottom:"10px"},children:[" ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"Time to Prepare:"})," ",timeList[1]," minutes"]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{paddingBottom:"10px"},children:[" ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"Instructions:"})," ",instructionsList[1]]})]})]}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__.a,{style:{color:"black",margin:"50px"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__.a,{style:{backgroundColor:"#3f51b5",color:"#fff",marginBottom:"20px"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h1",{style:{fontSize:"25px"},children:[" Recipe Title: ",titleList[0]," "]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{paddingBottom:"10px"},children:[" ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"Ingredients:"})," ",ingredientsList[0],"  "]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{paddingBottom:"10px"},children:[" ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"Time to Prepare:"})," ",timeList[0]," minutes"]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{paddingBottom:"10px"},children:[" ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"Instructions:"})," ",instructionsList[0]]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__.a,{style:{backgroundColor:"#3f51b5",color:"#fff",marginBottom:"20px"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h1",{style:{fontSize:"25px"},children:[" Recipe Title: ",titleList[1]," "]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{paddingBottom:"10px"},children:[" ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"Ingredients:"})," ",ingredientsList[1]," "]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{paddingBottom:"10px"},children:[" ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"Time to Prepare:"})," ",timeList[1]," minutes"]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{paddingBottom:"10px"},children:[" ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"Instructions:"})," ",instructionsList[1]]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__.a,{style:{backgroundColor:"#3f51b5",color:"#fff",marginBottom:"20px"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h1",{style:{fontSize:"25px"},children:[" Recipe Title: ",titleList[2]," "]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{paddingBottom:"10px"},children:[" ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"Ingredients:"})," ",ingredientsList[2]," "]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{paddingBottom:"10px"},children:[" ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"Time to Prepare:"})," ",timeList[2]," minutes"]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{paddingBottom:"10px"},children:[" ",Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2",{children:"Instructions:"})," ",instructionsList[2]]})]})]})}__webpack_exports__.a=Vsm},50:function(e,t,i){},51:function(e,t,i){},52:function(e){e.exports=JSON.parse('{"05zEpbSqcs9E0rcnCJWyZ9OgdH0MLby":{"ingredients":["12 egg whites","12 egg yolks","1 1/2 cups sugar","3/4 cup rye whiskey","12 egg whites","3/4 cup brandy","1/2 cup rum","1 to 2 cups heavy cream, lightly whipped","Garnish: ground nutmeg"],"picture_link":null,"instructions":"Beat the egg whites until stiff, gradually adding in 3/4 cup sugar. Set aside. Beat the egg yolks until they are thick and pale and add the other 3/4 cup sugar and stir in rye whiskey. Blend well. Fold the egg white mixture into the yolk mixture and add the brandy and the rum. Beat the mixture well. To serve, fold the lightly whipped heavy cream into the eggnog. (If a thinner mixture is desired, add the heavy cream unwhipped.) Sprinkle the top of the eggnog with the nutmeg to taste.\\nBeat the egg whites until stiff, gradually adding in 3/4 cup sugar. Set aside. Beat the egg yolks until they are thick and pale and add the other 3/4 cup sugar and stir in rye whiskey. Blend well. Fold the egg white mixture into the yolk mixture and add the brandy and the rum. Beat the mixture well. To serve, fold the lightly whipped heavy cream into the eggnog. (If a thinner mixture is desired, add the heavy cream unwhipped.) Sprinkle the top of the eggnog with the nutmeg to taste.","title":"Christmas Eggnog "},"mF5SZmoqxF4WtIlhLRvzuKk.z6s7P2S":{"ingredients":["18 fresh chestnuts","2 1/2 pounds veal stew meat, cut into 2x1-inch pieces","4 tablespoons olive oil","1 1/2 cups chopped onion","1 1/2 tablespoons chopped garlic","1 bay leaf","2 1/2 cups canned low-salt chicken broth","3/4 cup dry white wine","6 medium carrots, peeled, cut into 1-inch pieces","3 tablespoons chopped fresh sage"],"picture_link":null,"instructions":"Preheat oven to 400\xb0F. Using small sharp knife, cut an X in each chestnut. Place in roasting pan. Bake until tender and shells loosen, about 35 minutes. Cool slightly. Remove hard shell and papery brown skin from each nut. Set nuts aside. Pat veal pieces dry with paper towels. Sprinkle with salt and pepper. Heat 2 tablespoons oil in heavy large pot over medium-high heat. Working in batches, add veal to pot and cook until brown on all sides, about 10 minutes. Using slotted spoon, transfer veal to large bowl. Heat 2 tablespoons oil in same pot. Add onion, garlic and bay leaf. Reduce heat to medium; cover and cook until onion is tender, stirring occasionally, about 5 minutes. Stir in broth and wine. Add veal and any accumulated juices from bowl. Bring to boil. Reduce heat. Cover; simmer 45 minutes, stirring occasionally. Add carrots to stew. Cover and cook until carrots are almost tender, about 25 minutes. Uncover and cook until meat is very tender and liquid is reduced to thin sauce consistency, about 25 minutes longer. Stir in nuts and sage. Simmer until nuts are heated through, about 3 minutes. Discard bay leaf. Transfer ragout to bowl.\\nPreheat oven to 400\xb0F. Using small sharp knife, cut an X in each chestnut. Place in roasting pan. Bake until tender and shells loosen, about 35 minutes. Cool slightly. Remove hard shell and papery brown skin from each nut. Set nuts aside.\\nPat veal pieces dry with paper towels. Sprinkle with salt and pepper. Heat 2 tablespoons oil in heavy large pot over medium-high heat. Working in batches, add veal to pot and cook until brown on all sides, about 10 minutes. Using slotted spoon, transfer veal to large bowl.\\nHeat 2 tablespoons oil in same pot. Add onion, garlic and bay leaf. Reduce heat to medium; cover and cook until onion is tender, stirring occasionally, about 5 minutes. Stir in broth and wine. Add veal and any accumulated juices from bowl. Bring to boil. Reduce heat. Cover; simmer 45 minutes, stirring occasionally.\\nAdd carrots to stew. Cover and cook until carrots are almost tender, about 25 minutes. Uncover and cook until meat is very tender and liquid is reduced to thin sauce consistency, about 25 minutes longer. Stir in nuts and sage. Simmer until nuts are heated through, about 3 minutes. Discard bay leaf. Transfer ragout to bowl.","title":"Veal, Carrot and Chestnut Rago\xfbt "}}')},53:function(e){e.exports=JSON.parse('{"rmK12Uau.ntP510KeImX506H6Mr6jTu":{"title":"Slow Cooker Chicken and Dumplings","ingredients":["4 skinless, boneless chicken breast halves ADVERTISEMENT","2 tablespoons butter ADVERTISEMENT","2 (10.75 ounce) cans condensed cream of chicken soup ADVERTISEMENT","1 onion, finely diced ADVERTISEMENT","2 (10 ounce) packages refrigerated biscuit dough, torn into pieces ADVERTISEMENT","ADVERTISEMENT"],"instructions":"Place the chicken, butter, soup, and onion in a slow cooker, and fill with enough water to cover.\\nCover, and cook for 5 to 6 hours on High. About 30 minutes before serving, place the torn biscuit dough in the slow cooker. Cook until the dough is no longer raw in the center.\\n","picture_link":"55lznCYBbs2mT8BTx6BTkLhynGHzM.S"},"5ZpZE8hSVdPk2ZXo1mZTyoPWJRSCPSm":{"title":"Awesome Slow Cooker Pot Roast","ingredients":["2 (10.75 ounce) cans condensed cream of mushroom soup ADVERTISEMENT","1 (1 ounce) package dry onion soup mix ADVERTISEMENT","1 1/4 cups water ADVERTISEMENT","5 1/2 pounds pot roast ADVERTISEMENT","ADVERTISEMENT"],"instructions":"In a slow cooker, mix cream of mushroom soup, dry onion soup mix and water. Place pot roast in slow cooker and coat with soup mixture.\\nCook on High setting for 3 to 4 hours, or on Low setting for 8 to 9 hours.\\n","picture_link":"QyrvGdGNMBA2lDdciY0FjKu.77MM0Oe"}}')},57:function(e,t,i){"use strict";i.r(t);var r=i(2),n=i(0),_=i.n(n),s=i(9),a=i.n(s),o=(i(50),i(12)),c=(i(51),i(35)),l=i(93),d=i(92),u=i(30),p=[],h="",m=[],j=!1;var E=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),i=(t[0],t[1]),_=function(e){i(e.target.value),h=e.target.value};return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("h1",{children:"Quick Eats"}),Object(r.jsx)("img",{src:"data:image/png;base64,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W+lUI8UXvqYi4W087oJToO6++26xIbbq2rWrqagofsBTktdshcddcArUgAEDxEbYauLEiaaiovgBT0lesxUed8EpUIcccojYCFulvXG7Un/gKclrtsLjLlgHauXKlWIDbJXFCd1KfYC3JM/ZCq/bYh2oKVOmiBe31eWXX24qKopf8JbkOVvhdVusA+Vr0/YFCxaYioriF7wlec5WLodUWAfqwAMPFC9uo9133z149913TUVF8QvewmOS92yE122xCpSv2eVJ50spSjl8zTO1nX1uFaipU6eKF7WVj4VcilIKXwtf8bwNVoHq27eveFFbLV++3FRUlHTAY5L3bIXnbbAK1P777y9e1Eb77ruvqaYo6YLXJA/aCM/bEDtQL7zwgnhBW/Xv399UVJR0wWuSB22F9+MSO1B33HGHeDFbzZo1y1RUlHTBa5IHbYX34xI7UL7SvnXrVlNRUdIFr0ketJXNq6rYgfKxVZPLc31FSYKPz01ttriLHSgfe5f73JRdUeLg4xALvB+XWIFas2aNeCFbpXXytqJEgeckL9qKDMQhVqB8nf30yCOPmIqKUhnwnORFW8U9QypWoEaOHClexFb6QEKpNL4eTJCBOMQK1GmnnSZexEa2H5Apii98TEggA3GIFagjjjhCvIiNevToYaopSmXBe5InbUQG4hArUBw/L13ERr5P21aUuOA9yZM2IgNxKBuo9evXixew1cKFC01FRakseE/ypK3IQjnKBuqBBx4Qi9tq06ZNpqKiVBa8J3nSVmShHGUD5WNdScuWLU01RckGPCh500Zx1vGVDZSPPSR+8IMfmGqKkg14UPKmjeLsMVE2UB06dBCL22jw4MGmmh8efvjh8LfFySefHLRo0SJ8AnPhhRcGd955p37WVUVwYsbkyZODn/zkJ+Gj7X322Sfo06dPMG7cuHCMfYIHJW/aiCyUo2ygdtllF7G4jW666SZTLTnnnnuueI0GMRnynnvuMd+t5BV+IZbbH5+x9gUelK5hI7JQjpKB2rJli1jYVr5+2xxwwAFifUn9+vUzP6XkjZ49e4pjJokx9wEelOrbikyUomSgfB1itWHDBlPRHZddbGwWhimVwWWhqo9dsvCgVNtW5Q4HLBkoHxsGciJcUubMmSPWjqN169aZKkrWMBbSGMURHkiKjxM3y23QWjJQPrYNc910vYH//Oc/QatW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",className:"App-logo",alt:"logo"}),Object(r.jsxs)("div",{children:[Object(r.jsx)(d.a,{id:"outlined-basic",disabled:j,label:"Ingredient",variant:"outlined",color:"primary",onChange:_,size:"small",style:{paddingTop:"4px"}}),Object(r.jsx)(l.a,{variant:"contained",disabled:j,color:"primary",size:"large",style:{marginLeft:"6px"},onClick:function(e){e.preventDefault(),""!=h&&(p.push(h),h="",console.log(p),i("")),m=[];for(var t=0;t<p.length;t++)m.push(Object(r.jsx)("span",{style:{padding:"2px"},children:p[t]},t))},children:"Add"}),Object(r.jsx)(l.a,{variant:"contained",color:"primary",size:"large",style:{marginLeft:"6px"},onClick:function(e){console.log("here"),e.preventDefault(),p=[],m=[],window.location.reload()},children:"Clear"}),Object(r.jsx)(l.a,{variant:"contained",disabled:j,color:"primary",size:"large",style:{marginLeft:"6px"},onClick:function(e){e.preventDefault(),j=!0,console.log(j),_(e)},children:"Search Recipes"})]}),Object(r.jsx)("div",{children:"Ingredient List:"}),Object(r.jsx)(u.a,{component:"span",style:{color:"black"},children:m}),Object(r.jsx)("div",{children:"Recipes:"}),Object(r.jsxs)(u.a,{component:"span",style:{color:"black"},children:[console.log(j),j?Object(r.jsx)(c.a,{query:p}):void 0]})]})})},O=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,95)).then((function(t){var i=t.getCLS,r=t.getFID,n=t.getFCP,_=t.getLCP,s=t.getTTFB;i(e),r(e),n(e),_(e),s(e)}))};a.a.render(Object(r.jsx)(_.a.StrictMode,{children:Object(r.jsx)(E,{})}),document.getElementById("root")),O()}},[[57,1,2]]]);
//# sourceMappingURL=main.7cd66347.chunk.js.map