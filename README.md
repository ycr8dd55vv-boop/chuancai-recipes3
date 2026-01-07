# 川菜食谱网站

一个现代化的川菜食谱搜索网站，参考苹果官网设计风格，采用扁平化UI设计。

## 功能特点

- 🎨 **现代化设计**：参考苹果官网的简洁扁平化风格
- 🔍 **智能搜索**：支持按菜名、描述、食材搜索
- 📱 **响应式布局**：完美适配桌面和移动设备
- 🎬 **视频教程**：点击菜谱卡片查看详细制作视频
- 🖼️ **精美图片**：每个菜谱配有高质量图片展示

## 项目结构

```
.
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # JavaScript功能
├── README.md           # 说明文档
└── wangye_kaifa/
    ├── images/         # 菜谱图片
    │   ├── gongbaojiding.jpg
    │   ├── hongshaorou.jpg
    │   ├── mapodoufu.jpg
    │   ├── qingzhengluyu.jpg
    │   ├── tangculiji.jpg
    │   └── yuxiangqiezi.jpg
    └── videos/         # 菜谱视频（需要添加）
        ├── gongbaojiding.mp4
        ├── hongshaorou.mp4
        ├── mapodoufu.mp4
        ├── qingzhengluyu.mp4
        ├── tangculiji.mp4
        └── yuxiangqiezi.mp4
```

## 使用说明

### 1. 添加Logo

将您的logo图片命名为 `logo.png`，放置在 `wangye_kaifa/images/` 目录下。如果logo不存在，网站会自动显示文字"川菜食谱"。

### 2. 添加视频

将菜谱制作视频放置在 `wangye_kaifa/videos/` 目录下，视频文件名需要与菜谱数据中的名称对应：

- `gongbaojiding.mp4` - 宫保鸡丁
- `hongshaorou.mp4` - 红烧肉
- `mapodoufu.mp4` - 麻婆豆腐
- `qingzhengluyu.mp4` - 清蒸鲈鱼
- `tangculiji.mp4` - 糖醋里脊
- `yuxiangqiezi.mp4` - 鱼香茄子

### 3. 运行网站

直接在浏览器中打开 `index.html` 文件即可使用，无需服务器。

或者使用本地服务器运行（推荐）：

```bash
# 使用Python
python -m http.server 8000

# 使用Node.js
npx http-server

# 使用PHP
php -S localhost:8000
```

然后在浏览器中访问 `http://localhost:8000`

## 菜谱列表

网站包含以下6道经典川菜：

1. **宫保鸡丁** - 经典川菜，鸡肉鲜嫩，花生香脆
2. **红烧肉** - 肥而不腻，瘦而不柴，色泽红亮
3. **麻婆豆腐** - 麻辣鲜香，豆腐嫩滑
4. **清蒸鲈鱼** - 鱼肉鲜嫩，原汁原味
5. **糖醋里脊** - 外酥内嫩，酸甜可口
6. **鱼香茄子** - 鱼香味浓郁，茄子软糯

## 技术特点

- 纯HTML/CSS/JavaScript实现，无需框架
- 响应式设计，支持各种屏幕尺寸
- 流畅的动画效果和交互体验
- 现代化的扁平化UI设计
- 支持键盘操作（ESC关闭模态框，Enter搜索）

## 浏览器支持

- Chrome（推荐）
- Firefox
- Safari
- Edge

## 注意事项

- 确保所有图片和视频文件路径正确
- 视频格式建议使用MP4格式以确保兼容性
- Logo图片建议使用PNG格式，透明背景


