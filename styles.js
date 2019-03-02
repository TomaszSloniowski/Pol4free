(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\r\n\r\n/*------------- general elements ------------*/\r\n\r\nbody {\r\n  scroll-behavior: visible;\r\n  margin: 0;\r\n  padding: 0;\r\n  min-height: 100%;\r\n  font-family: sans-serif;\r\n  }\r\n\r\nhtml {\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\np,\r\nh3,\r\nh4,\r\nh5 {\r\n  margin: 0;\r\n}\r\n\r\n/*---------- grid items -----------*/\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  min-width: 300px;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.item {\r\n  display: flex;\r\n  }\r\n\r\n.item__landing__image {\r\n  display: flex;\r\n  max-width:100%;\r\n  min-height: 100%;\r\n\r\n}\r\n\r\n.item__logo {\r\n  grid-column: 1;\r\n  grid-row: 1;\r\n  justify-items: start;\r\n  color: black;\r\n  font-weight: 700;\r\n  font-size: 1.2rem;\r\n  padding: 20px;\r\n  padding-bottom: 3px;\r\n}\r\n\r\n.item__hamburger {\r\n  grid-column: 2;\r\n  grid-row: 1;\r\n  justify-self: end;\r\n  padding: 20px;\r\n}\r\n\r\n.item__menu {\r\n  grid-column: 2;\r\n  grid-row: 1;\r\n  flex-direction: row;\r\n  justify-content: end;\r\n  justify-items: space-around;\r\n  padding-top: 20px;\r\n}\r\n\r\n.item__location {\r\n  grid-column: 1;\r\n  grid-row: 2;\r\n  padding: 20px;\r\n  color: rgb(100, 100, 100);\r\n}\r\n\r\n.item__date {\r\n  grid-column: 2;\r\n  grid-row: 2;\r\n  justify-self: flex-end;\r\n  padding: 20px;\r\n}\r\n\r\n.item__thumbnails__list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-items: flex-start;\r\n  background-color: whitesmoke;\r\n  padding: 20px;\r\n  min-height: 50vh;\r\n}\r\n\r\n.item__thumbnail {\r\n  grid-column: 1;\r\n  grid-row: auto;\r\n  background-color: whitesmoke;\r\n  justify-items: center;\r\n  max-height: 120px;\r\n  max-width: 120px;\r\n  padding: 20px;\r\n  \r\n}\r\n\r\n.item__thumbnail__label {\r\n  grid-column: 2;\r\n  grid-row: auto;\r\n  background-color: whitesmoke;\r\n  font-size: 0.8rem;\r\n  font-weight: 500px;\r\n}\r\n\r\n.item__details {\r\n  grid-column: 1/3;\r\n  grid-row: auto;\r\n  background-color: rgb(250, 250, 250);\r\n}\r\n\r\n.item__image {\r\n  grid-column: 1/3;\r\n  grid-row: auto;\r\n  }\r\n\r\n.item__event__description {\r\n  flex-direction: column;\r\n  grid-column: 1/3;\r\n  grid-row: auto;\r\n  justify-items: start;\r\n  background-color: rgb(250, 250, 250);\r\n  text-align: justify;\r\n  padding: 30px;\r\n}\r\n\r\n.item__events__list {\r\n  flex-direction: column;\r\n  grid-column: 1/3;\r\n  grid-row: auto;\r\n  justify-items: flex-start;\r\n  align-items: flex-start;\r\n  background-color: rgb(254, 254, 254);\r\n  font-size: 0.8rem;\r\n  padding-left: 30px;\r\n  padding-bottom: 20px;\r\n  padding-top: 0px;\r\n}\r\n\r\n.item__footer {\r\n  grid-column: 1/3;\r\n  align-self: flex-end;\r\n  grid-row: auto;\r\n  min-height: 120px;\r\n  background-color: rgb(122, 201, 228);\r\n  font-size: 0.8rem;\r\n  padding-top: 25px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.item__filters {\r\n  flex-direction: column;\r\n  grid-column: 1/3;\r\n  justify-items: start;\r\n  min-height: 300px;\r\n  background-color: whitesmoke;\r\n  padding-bottom: 50px;\r\n  padding-left: 30px;\r\n}\r\n\r\n/*--------- menu elements -------*/\r\n\r\n.item__logo--subtitle {\r\n  justify-items: start;\r\n  color: black;\r\n  font-weight: 200;\r\n  font-size: 0.75em;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n  padding-left: 20px;\r\n}\r\n\r\n.logo__4 {\r\n  color: rgb(255, 115, 0);\r\n}\r\n\r\n.item__menu__main {\r\n  font-size: 1rem;\r\n  font-weight: 200;\r\n  color: black;\r\n  text-decoration: none;\r\n  padding: 15px;\r\n  min-width: 110px;\r\n}\r\n\r\n.item__menu__link {\r\n  text-decoration: none;\r\n  color: black;\r\n  font-size: 0.8rem;\r\n}\r\n\r\na:link a:visited a:active a:focus {\r\n  text-decoration: none;\r\n  color: black;\r\n  \r\n}\r\n\r\n.item__menu__date {\r\n  text-decoration: none;\r\n  color: black;\r\n  \r\n  font-size: 0.8rem;\r\n  font-weight: 400;\r\n  color: rgb(122, 201, 228);\r\n}\r\n\r\n/*------------ icons ----------------*/\r\n\r\n.icon__date,\r\n.icon__map__marker {\r\n  color: rgb(100, 100, 100);\r\n  padding-right: 7px;\r\n}\r\n\r\n.icon__hamburger {\r\n  padding: 5px;\r\n  font-size: 1.3rem;\r\n  color: black;\r\n}\r\n\r\n.icon__event__description__footer {\r\n  color: rgb(100, 100, 100);\r\n  font-size: 1.2em;\r\n  padding-top: 25px;\r\n  padding-right: 20px;\r\n}\r\n\r\n/*---------- thubnail label ------------*/\r\n\r\nul {\r\n  list-style-type: none;\r\n  padding-left: 20px;\r\n  padding-top: 20px;\r\n  margin-top: 0px;\r\n}\r\n\r\n.thumbnail_label__title {\r\n  font-size: 1.1em;\r\n  font-weight: 600;\r\n  padding-bottom: 10px\r\n}\r\n\r\n.thumbnail_label__location {\r\n  font-size: 1.1em;\r\n  font-weight: 400;\r\n  padding-bottom: 10px\r\n}\r\n\r\n.thumbnail_label__date {\r\n  font-size: 1.1em;\r\n  font-weight: 500;\r\n  color: rgb(122, 201, 228);\r\n}\r\n\r\n/*------- event details -------------*/\r\n\r\n.event__description__header {\r\n  padding-top: 5px;\r\n  padding-bottom: 20px;\r\n  font-size: 1.1rem;\r\n  font-weight: 600px;\r\n}\r\n\r\n.event__description__pointer {\r\n  display: none;\r\n  color: rgb(131, 131, 131);\r\n  font-size: 0.9rem;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.event__description__details {\r\n  grid-column: 1/3;\r\n  grid-row: auto;\r\n  justify-items: start;\r\n  background-color: rgb(250, 250, 250);\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.event__description__footer {\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.event__source {\r\n  padding-top: 15px;\r\n  font-size: 0.7em;\r\n  font-weight: 100;\r\n  color: darkgray;\r\n  width: 50%;\r\n}\r\n\r\n/*-------- events list ----------------*/\r\n\r\n.event__list__header {\r\n  grid-column: 1/3;\r\n  font-size: 0.95rem;\r\n  color: black;\r\n  padding-left: 30px;\r\n  padding-top: 40px;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.event__location__county {\r\n  font-size: 0.9rem;\r\n  padding-top: 15px;\r\n  font-weight: 100;\r\n  color: darkgrey;\r\n}\r\n\r\n.events__list__header__date {\r\n  padding-top: 10px;\r\n  padding-bottom: 15px;\r\n  color: rgb(122, 201, 228);\r\n  font-size: 1rem;\r\n  font-weight: 300;\r\n}\r\n\r\n.events__list__date {\r\n  display: inline-block;\r\n  width: 60px;\r\n  height: 20px;\r\n  margin-top: 10px;\r\n  margin-left: 0;\r\n  padding: 10px;\r\n  text-align: center;\r\n  font-size: 1.5em;\r\n  font-weight: 500;\r\n  color: rgb(122, 201, 228);\r\n  border: solid 1px rgb(122, 201, 228);\r\n  border-radius: 15px;\r\n}\r\n\r\n.events__list_details {\r\n  display: flex;\r\n  flex-direction: row;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.events__list__name {\r\n  font-size: 0.8rem;\r\n  padding-top: 10px;\r\n  padding-left: 20px;\r\n  font-weight: 600;\r\n}\r\n\r\n.events__list__location {\r\n  padding-top: 10px;\r\n  font-size: 0.8rem;\r\n  font-weight: 200;\r\n}\r\n\r\n.events__list__link {\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n@media (min-width: 48em) {\r\n  .item__hamburger {\r\n    display: none;\r\n  }\r\n\r\n  .item__event__description {\r\n    grid-column: 2;\r\n    grid-row: auto;\r\n  }\r\n\r\n  .item__image {\r\n    grid-column: 1;\r\n    grid-row: auto;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n    padding: 50px;\r\n    align-self: flex-start;\r\n    max-width: 40vw;\r\n  }\r\n\r\n  .event__description__header {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    padding-left: 30px;\r\n    font-size: 1.5rem;\r\n    font-weight: 600px;\r\n    letter-spacing: 0.03rem;\r\n    word-spacing: 0.5rem;\r\n  }\r\n\r\n  .event__description__pointer {\r\n    display: none;\r\n  }\r\n\r\n  .event__description__details {\r\n    grid-column: 2;\r\n    grid-row: auto;\r\n    justify-items: start;\r\n    background-color: rgb(250, 250, 250);\r\n    font-size: 0.9rem;\r\n    letter-spacing: 0.025px;\r\n    word-spacing: 0.1px;\r\n    line-height: 1.3;\r\n    padding: 25px;\r\n  }\r\n\r\n  .event__description__footer {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    padding-left: 30px;\r\n  }\r\n}\r\n\r\n@media (max-width: 48em) {\r\n  .item__menu {\r\n    display: none;\r\n  }\r\n\r\n  .item__image {\r\n    grid-column: 1/3;\r\n    grid-row: auto;\r\n    width: 100%;\r\n  }\r\n\r\n  .item__details {\r\n    grid-column: 1/3;\r\n    flex-direction: column;\r\n    grid-row: auto;\r\n  }\r\n\r\n  .item__event__description {\r\n    grid-column: 1/3;\r\n    grid-row: auto;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,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QUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsV0FBVztFQUNiOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLyotLS0tLS0tLS0tLS0tIGdlbmVyYWwgZWxlbWVudHMgLS0tLS0tLS0tLS0tKi9cclxuXHJcbmJvZHkge1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogdmlzaWJsZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbmh0bWwge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxucCxcclxuaDMsXHJcbmg0LFxyXG5oNSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLS0tIGdyaWQgaXRlbXMgLS0tLS0tLS0tLS0qL1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuXHJcbi5pdGVtX19sYW5kaW5nX19pbWFnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXgtd2lkdGg6MTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG5cclxufVxyXG5cclxuLml0ZW1fX2xvZ28ge1xyXG4gIGdyaWQtY29sdW1uOiAxO1xyXG4gIGdyaWQtcm93OiAxO1xyXG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDNweDtcclxufVxyXG5cclxuLml0ZW1fX2hhbWJ1cmdlciB7XHJcbiAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgZ3JpZC1yb3c6IDE7XHJcbiAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLml0ZW1fX21lbnUge1xyXG4gIGdyaWQtY29sdW1uOiAyO1xyXG4gIGdyaWQtcm93OiAxO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAganVzdGlmeS1pdGVtczogc3BhY2UtYXJvdW5kO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uaXRlbV9fbG9jYXRpb24ge1xyXG4gIGdyaWQtY29sdW1uOiAxO1xyXG4gIGdyaWQtcm93OiAyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcclxufVxyXG5cclxuLml0ZW1fX2RhdGUge1xyXG4gIGdyaWQtY29sdW1uOiAyO1xyXG4gIGdyaWQtcm93OiAyO1xyXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLml0ZW1fX3RodW1ibmFpbHNfX2xpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktaXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDUwdmg7XHJcbn1cclxuXHJcbi5pdGVtX190aHVtYm5haWwge1xyXG4gIGdyaWQtY29sdW1uOiAxO1xyXG4gIGdyaWQtcm93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIG1heC1oZWlnaHQ6IDEyMHB4O1xyXG4gIG1heC13aWR0aDogMTIwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBcclxufVxyXG5cclxuLml0ZW1fX3RodW1ibmFpbF9fbGFiZWwge1xyXG4gIGdyaWQtY29sdW1uOiAyO1xyXG4gIGdyaWQtcm93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4uaXRlbV9fZGV0YWlscyB7XHJcbiAgZ3JpZC1jb2x1bW46IDEvMztcclxuICBncmlkLXJvdzogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XHJcbn1cclxuXHJcbi5pdGVtX19pbWFnZSB7XHJcbiAgZ3JpZC1jb2x1bW46IDEvMztcclxuICBncmlkLXJvdzogYXV0bztcclxuICB9XHJcblxyXG4uaXRlbV9fZXZlbnRfX2Rlc2NyaXB0aW9uIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgZ3JpZC1yb3c6IGF1dG87XHJcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLml0ZW1fX2V2ZW50c19fbGlzdCB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBncmlkLWNvbHVtbjogMS8zO1xyXG4gIGdyaWQtcm93OiBhdXRvO1xyXG4gIGp1c3RpZnktaXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NCwgMjU0LCAyNTQpO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4uaXRlbV9fZm9vdGVyIHtcclxuICBncmlkLWNvbHVtbjogMS8zO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIGdyaWQtcm93OiBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjIsIDIwMSwgMjI4KTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5pdGVtX19maWx0ZXJzIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLSBtZW51IGVsZW1lbnRzIC0tLS0tLS0qL1xyXG5cclxuLml0ZW1fX2xvZ28tLXN1YnRpdGxlIHtcclxuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBmb250LXNpemU6IDAuNzVlbTtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5sb2dvX180IHtcclxuICBjb2xvcjogcmdiKDI1NSwgMTE1LCAwKTtcclxufVxyXG5cclxuLml0ZW1fX21lbnVfX21haW4ge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtaW4td2lkdGg6IDExMHB4O1xyXG59XHJcblxyXG4uaXRlbV9fbWVudV9fbGluayB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuYTpsaW5rIGE6dmlzaXRlZCBhOmFjdGl2ZSBhOmZvY3VzIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIFxyXG59XHJcblxyXG4uaXRlbV9fbWVudV9fZGF0ZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiByZ2IoMTIyLCAyMDEsIDIyOCk7XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLSBpY29ucyAtLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5pY29uX19kYXRlLFxyXG4uaWNvbl9fbWFwX19tYXJrZXIge1xyXG4gIGNvbG9yOiByZ2IoMTAwLCAxMDAsIDEwMCk7XHJcbiAgcGFkZGluZy1yaWdodDogN3B4O1xyXG59XHJcblxyXG4uaWNvbl9faGFtYnVyZ2VyIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uaWNvbl9fZXZlbnRfX2Rlc2NyaXB0aW9uX19mb290ZXIge1xyXG4gIGNvbG9yOiByZ2IoMTAwLCAxMDAsIDEwMCk7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0gdGh1Ym5haWwgbGFiZWwgLS0tLS0tLS0tLS0tKi9cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLnRodW1ibmFpbF9sYWJlbF9fdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweFxyXG59XHJcblxyXG4udGh1bWJuYWlsX2xhYmVsX19sb2NhdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4XHJcbn1cclxuXHJcbi50aHVtYm5haWxfbGFiZWxfX2RhdGUge1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogcmdiKDEyMiwgMjAxLCAyMjgpO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tIGV2ZW50IGRldGFpbHMgLS0tLS0tLS0tLS0tLSovXHJcblxyXG4uZXZlbnRfX2Rlc2NyaXB0aW9uX19oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMHB4O1xyXG59XHJcblxyXG4uZXZlbnRfX2Rlc2NyaXB0aW9uX19wb2ludGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGNvbG9yOiByZ2IoMTMxLCAxMzEsIDEzMSk7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5ldmVudF9fZGVzY3JpcHRpb25fX2RldGFpbHMge1xyXG4gIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgZ3JpZC1yb3c6IGF1dG87XHJcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG4uZXZlbnRfX2Rlc2NyaXB0aW9uX19mb290ZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uZXZlbnRfX3NvdXJjZSB7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAwLjdlbTtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGNvbG9yOiBkYXJrZ3JheTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5cclxuLyotLS0tLS0tLSBldmVudHMgbGlzdCAtLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbi5ldmVudF9fbGlzdF9faGVhZGVyIHtcclxuICBncmlkLWNvbHVtbjogMS8zO1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5ldmVudF9fbG9jYXRpb25fX2NvdW50eSB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBjb2xvcjogZGFya2dyZXk7XHJcbn1cclxuXHJcbi5ldmVudHNfX2xpc3RfX2hlYWRlcl9fZGF0ZSB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgY29sb3I6IHJnYigxMjIsIDIwMSwgMjI4KTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmV2ZW50c19fbGlzdF9fZGF0ZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogcmdiKDEyMiwgMjAxLCAyMjgpO1xyXG4gIGJvcmRlcjogc29saWQgMXB4IHJnYigxMjIsIDIwMSwgMjI4KTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uZXZlbnRzX19saXN0X2RldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmV2ZW50c19fbGlzdF9fbmFtZSB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5ldmVudHNfX2xpc3RfX2xvY2F0aW9uIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcblxyXG4uZXZlbnRzX19saXN0X19saW5rIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ4ZW0pIHtcclxuICAuaXRlbV9faGFtYnVyZ2VyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuaXRlbV9fZXZlbnRfX2Rlc2NyaXB0aW9uIHtcclxuICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgZ3JpZC1yb3c6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuaXRlbV9faW1hZ2Uge1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICBncmlkLXJvdzogYXV0bztcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIG1heC13aWR0aDogNDB2dztcclxuICB9XHJcblxyXG4gIC5ldmVudF9fZGVzY3JpcHRpb25fX2hlYWRlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM3JlbTtcclxuICAgIHdvcmQtc3BhY2luZzogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmV2ZW50X19kZXNjcmlwdGlvbl9fcG9pbnRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmV2ZW50X19kZXNjcmlwdGlvbl9fZGV0YWlscyB7XHJcbiAgICBncmlkLWNvbHVtbjogMjtcclxuICAgIGdyaWQtcm93OiBhdXRvO1xyXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyNXB4O1xyXG4gICAgd29yZC1zcGFjaW5nOiAwLjFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmV2ZW50X19kZXNjcmlwdGlvbl9fZm9vdGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDhlbSkge1xyXG4gIC5pdGVtX19tZW51IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuaXRlbV9faW1hZ2Uge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgIGdyaWQtcm93OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuaXRlbV9fZGV0YWlscyB7XHJcbiAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdyaWQtcm93OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLml0ZW1fX2V2ZW50X19kZXNjcmlwdGlvbiB7XHJcbiAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgZ3JpZC1yb3c6IGF1dG87XHJcbiAgfVxyXG59XHJcbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\TOMEK\FRONTEND\WORK\pol4free\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map