$(function (){
  //@懒加载
  $("img.am_img").lazyload();
  $("a.am_img_bg").lazyload({
      effect : 'fadeIn' 
  });
});