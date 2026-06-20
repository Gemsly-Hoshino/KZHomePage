// 导航按钮（Nav buttons）交互逻辑简化
$(".kz-nav-btn").on("click", function () {
  let btn = $(this);
  let type = btn.data("window"); // 保持与 HTML data 属性的向下兼容契合度
  let content = btn.data("href");

  // 如果定义了新标签页打开，或者本就是 mailto 协议，一律采用干净的 window.open
  if (type === "newtab" || content.startsWith("mailto:")) {
    window.open(content, "_blank");
  } else {
    // 降级兜底：当前页面直接跳转
    window.location.href = content;
  }
});

// 纯净日志输出
console.log(
  "\n %c Gemsly's Home %c https://blog.gemslyho.org \n",
  "color: #fff; background: #3b82f6; padding:5px 0;",
  "background: #FFF; padding:5px 0;"
);

// 彻底移除了原有的音乐播放器（APlayer & Meting）AJAX 异步调用死资产

// 一言（Hitokoto）异步渲染逻辑
fetch(hitokoto_api)
  .then((response) => response.json())
  .then((data) => {
    const hitokoto = document.getElementById("hitokoto_text");
    // 清洗外链特征，回归纯文本展示
    hitokoto.innerText = data.hitokoto;
  })
  .catch(console.error);