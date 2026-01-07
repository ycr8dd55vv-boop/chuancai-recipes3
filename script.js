// Logo加载处理函数
function loadLogo() {
    const logoImg = document.getElementById('logo-img');
    const logoText = document.getElementById('logo-text');
    
    if (!logoImg || !logoText) {
        console.warn('Logo元素未找到');
        return;
    }
    
    // 尝试加载不同格式的logo
    const formats = ['png', 'jpg', 'jpeg', 'webp', 'svg'];
    let currentFormat = 0;
    let triedInitial = false;
    
    function tryNextFormat() {
        if (currentFormat < formats.length) {
            const format = formats[currentFormat];
            const testImg = new Image();
            const testPath = `wangye_kaifa/images/logo.${format}`;
            
            testImg.onload = function() {
                // 图片加载成功
                logoImg.src = testPath;
                logoImg.style.display = 'block';
                logoText.style.display = 'none';
                console.log('Logo加载成功:', testPath);
            };
            testImg.onerror = function() {
                // 图片加载失败，尝试下一个格式
                console.log('尝试加载Logo失败:', testPath);
                currentFormat++;
                tryNextFormat();
            };
            testImg.src = testPath;
        } else {
            // 所有格式都失败，显示文字
            console.warn('所有Logo格式加载失败，显示文字');
            logoImg.style.display = 'none';
            logoText.style.display = 'block';
        }
    }
    
    // 检查初始图片是否已加载
    if (logoImg.complete) {
        if (logoImg.naturalHeight !== 0) {
            // 图片已成功加载
            logoImg.style.display = 'block';
            logoText.style.display = 'none';
            console.log('Logo已加载:', logoImg.src);
        } else {
            // 初始加载失败，尝试其他格式
            triedInitial = true;
            tryNextFormat();
        }
    } else {
        // 图片正在加载中，添加错误监听
        logoImg.addEventListener('error', function() {
            if (!triedInitial) {
                triedInitial = true;
                tryNextFormat();
            }
        }, { once: true });
        
        logoImg.addEventListener('load', function() {
            logoImg.style.display = 'block';
            logoText.style.display = 'none';
            console.log('Logo加载完成:', logoImg.src);
        }, { once: true });
    }
}

// 页面加载完成后尝试加载logo
document.addEventListener('DOMContentLoaded', loadLogo);
// 如果DOM已经加载完成，立即执行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadLogo);
} else {
    loadLogo();
}

// 菜谱数据
const recipes = [
    {
        id: 1,
        name: "宫保鸡丁",
        description: "经典川菜，鸡肉鲜嫩，花生香脆，酸甜微辣，口感丰富",
        image: "wangye_kaifa/images/gongbaojiding.jpg",
        video: "wangye_kaifa/videos/gongbaojiding.mp4",
        ingredients: [
            "鸡胸肉 300克",
            "花生米 50克",
            "干辣椒 10-15个",
            "花椒 1茶匙（约5克）",
            "大葱 2根（约50克）",
            "生姜 1小块（约10克）",
            "大蒜 3瓣（约10克）",
            "生抽 2汤匙（约30毫升）",
            "老抽 1茶匙（约5毫升）",
            "白糖 1汤匙（约15克）",
            "陈醋 1汤匙（约15毫升）",
            "料酒 1汤匙（约15毫升）",
            "盐 适量",
            "水淀粉 2汤匙（约30毫升）"
        ]
    },
    {
        id: 2,
        name: "红烧肉",
        description: "肥而不腻，瘦而不柴，色泽红亮，入口即化",
        image: "wangye_kaifa/images/hongshaorou.jpg",
        video: "wangye_kaifa/videos/hongshaorou.mp4",
        ingredients: [
            "五花肉 500克",
            "冰糖 30-40克",
            "生抽 3汤匙（约45毫升）",
            "老抽 1汤匙（约15毫升）",
            "料酒 2汤匙（约30毫升）",
            "大葱 1根（约30克）",
            "生姜 1块（约20克）",
            "八角 2-3个",
            "桂皮 1小块（约3克）",
            "香叶 2-3片",
            "盐 适量",
            "清水 适量"
        ]
    },
    {
        id: 3,
        name: "麻婆豆腐",
        description: "麻辣鲜香，豆腐嫩滑，肉末酥香，是川菜的代表作",
        image: "wangye_kaifa/images/mapodoufu.jpg",
        video: "wangye_kaifa/videos/mapodoufu.mp4",
        ingredients: [
            "嫩豆腐 400克",
            "牛肉末 100克",
            "郫县豆瓣酱 2汤匙（约30克）",
            "花椒粉 1茶匙（约3克）",
            "大葱 1根（约30克）",
            "生姜 1小块（约10克）",
            "大蒜 3瓣（约10克）",
            "生抽 1汤匙（约15毫升）",
            "料酒 1汤匙（约15毫升）",
            "水淀粉 2汤匙（约30毫升）",
            "盐 适量",
            "葱花 适量（装饰用）"
        ]
    },
    {
        id: 4,
        name: "清蒸鲈鱼",
        description: "鱼肉鲜嫩，原汁原味，清淡健康，营养丰富",
        image: "wangye_kaifa/images/qingzhengluyu.jpg",
        video: "wangye_kaifa/videos/qingzhengluyu.mp4",
        ingredients: [
            "鲈鱼 1条（约500-600克）",
            "大葱 2根（约50克）",
            "生姜 1块（约30克）",
            "蒸鱼豉油 3汤匙（约45毫升）",
            "料酒 2汤匙（约30毫升）",
            "盐 1茶匙（约5克）",
            "白胡椒粉 1/2茶匙（约2克）",
            "香菜 适量（装饰用）",
            "食用油 2汤匙（约30毫升）"
        ]
    },
    {
        id: 5,
        name: "糖醋里脊",
        description: "外酥内嫩，酸甜可口，色泽金黄，老少皆宜",
        image: "wangye_kaifa/images/tangculiji.jpg",
        video: "wangye_kaifa/videos/tangculiji.mp4",
        ingredients: [
            "猪里脊 300克",
            "鸡蛋 1个",
            "面粉 50克",
            "玉米淀粉 50克",
            "番茄酱 3汤匙（约45克）",
            "白糖 2汤匙（约30克）",
            "白醋 2汤匙（约30毫升）",
            "生抽 1汤匙（约15毫升）",
            "料酒 1汤匙（约15毫升）",
            "盐 1茶匙（约5克）",
            "白胡椒粉 1/2茶匙（约2克）",
            "水淀粉 1汤匙（约15毫升）",
            "食用油 适量（用于炸制）"
        ]
    },
    {
        id: 6,
        name: "鱼香茄子",
        description: "鱼香味浓郁，茄子软糯，酸甜微辣，下饭神器",
        image: "wangye_kaifa/images/yuxiangqiezi.jpg",
        video: "wangye_kaifa/videos/yuxiangqiezi.mp4",
        ingredients: [
            "茄子 400克",
            "猪肉末 100克",
            "郫县豆瓣酱 1.5汤匙（约25克）",
            "大葱 1根（约30克）",
            "生姜 1小块（约10克）",
            "大蒜 3瓣（约10克）",
            "生抽 2汤匙（约30毫升）",
            "白糖 1.5汤匙（约20克）",
            "陈醋 1.5汤匙（约20毫升）",
            "料酒 1汤匙（约15毫升）",
            "水淀粉 2汤匙（约30毫升）",
            "盐 适量",
            "食用油 适量"
        ]
    }
];

// 初始化
let filteredRecipes = [...recipes];

// DOM元素
const recipesGrid = document.getElementById('recipes-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const modal = document.getElementById('recipe-modal');
const closeModal = document.getElementById('close-modal');
const modalBody = document.getElementById('modal-body');

// 渲染菜谱卡片
function renderRecipes(recipesToRender) {
    recipesGrid.innerHTML = '';
    
    if (recipesToRender.length === 0) {
        recipesGrid.innerHTML = '<div class="no-results">未找到相关菜谱，请尝试其他关键词</div>';
        return;
    }
    
    recipesToRender.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        
        // 创建图片元素，添加更好的错误处理
        const img = document.createElement('img');
        img.src = recipe.image;
        img.alt = recipe.name;
        img.className = 'recipe-image';
        img.loading = 'lazy'; // 懒加载优化
        
        // 图片加载失败时的处理
        img.onerror = function() {
            // 尝试使用备用占位图
            this.onerror = null; // 防止无限循环
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjI0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzIwIiBoZWlnaHQ9IjI0MCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuWbvueJh+WKoOi9veWksei0pTwvdGV4dD48L3N2Zz4=';
            console.warn('图片加载失败:', recipe.image);
        };
        
        // 图片加载成功
        img.onload = function() {
            console.log('图片加载成功:', recipe.image);
        };
        
        card.innerHTML = `
            <div class="recipe-info">
                <h2 class="recipe-title">${recipe.name}</h2>
                <p class="recipe-description">${recipe.description}</p>
            </div>
        `;
        
        // 将图片插入到卡片开头
        card.insertBefore(img, card.firstChild);
        
        // 优化触摸事件
        card.addEventListener('click', (e) => {
            e.preventDefault();
            openRecipeModal(recipe);
        });
        
        // 移动端触摸反馈
        let touchStartY = 0;
        card.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
            card.style.transform = 'scale(0.98)';
        }, { passive: true });
        
        card.addEventListener('touchend', () => {
            card.style.transform = '';
        }, { passive: true });
        
        card.addEventListener('touchcancel', () => {
            card.style.transform = '';
        }, { passive: true });
        
        recipesGrid.appendChild(card);
    });
}

// 获取视频MIME类型
function getVideoType(videoPath) {
    const extension = videoPath.split('.').pop().toLowerCase();
    const typeMap = {
        'mp4': 'video/mp4',
        'mov': 'video/quicktime',
        'webm': 'video/webm',
        'ogg': 'video/ogg',
        'avi': 'video/x-msvideo'
    };
    return typeMap[extension] || 'video/mp4';
}

// 打开菜谱详情模态框
function openRecipeModal(recipe) {
    const videoType = getVideoType(recipe.video);
    const videoPath = recipe.video;
    
    // 如果是MOV格式，尝试同时提供MP4备选
    const videoExtension = videoPath.split('.').pop().toLowerCase();
    const alternativePath = videoExtension === 'mov' ? videoPath.replace('.mov', '.mp4') : null;
    
    // 创建视频加载状态提示
    const loadingHtml = `
        <div class="video-loading" style="padding: 40px; text-align: center; background: rgba(0,0,0,0.5); border-radius: 12px; color: white;">
            <p style="font-size: 16px; margin-bottom: 10px;">正在加载视频...</p>
            <p style="font-size: 14px; opacity: 0.8;">${videoPath}</p>
        </div>
    `;
    
    // 构建source标签
    let sourceTags = `<source src="${videoPath}" type="${videoType}">`;
    if (alternativePath) {
        sourceTags += `<source src="${alternativePath}" type="video/mp4">`;
    }
    
    modalBody.innerHTML = `
        <h1 class="modal-title">${recipe.name}</h1>
        <div id="video-container">
            ${loadingHtml}
            <video class="modal-video" controls playsinline webkit-playsinline x5-playsinline x5-video-player-type="h5" x5-video-player-fullscreen="true" preload="metadata" style="display: none;">
                ${sourceTags}
                您的浏览器不支持视频播放。
            </video>
        </div>
        <p class="modal-description">${recipe.description}</p>
        <div class="modal-ingredients">
            <h3>所需食材</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        </div>
    `;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // 微信浏览器视频优化
    const video = modalBody.querySelector('video');
    const videoContainer = document.getElementById('video-container');
    const loadingDiv = videoContainer.querySelector('.video-loading');
    
    if (video) {
        // 详细的错误处理
        function handleVideoError(error) {
            const videoExtension = videoPath.split('.').pop().toLowerCase();
            
            console.error('视频加载错误详情:', {
                videoPath: videoPath,
                videoType: videoType,
                videoExtension: videoExtension,
                error: error,
                networkState: video.networkState,
                readyState: video.readyState,
                errorCode: video.error ? video.error.code : 'unknown',
                errorMessage: video.error ? video.error.message : 'unknown',
                browser: navigator.userAgent
            });
            
            let errorMessage = '视频无法播放';
            let errorDetail = '';
            
            if (video.error) {
                switch(video.error.code) {
                    case 1: // MEDIA_ERR_ABORTED
                        errorMessage = '视频加载被中止';
                        errorDetail = '用户取消了视频加载';
                        break;
                    case 2: // MEDIA_ERR_NETWORK
                        errorMessage = '网络错误';
                        errorDetail = '请检查网络连接或视频文件路径是否正确';
                        break;
                    case 3: // MEDIA_ERR_DECODE
                        errorMessage = '视频解码错误';
                        if (videoExtension === 'mov') {
                            errorDetail = 'MOV格式可能不被当前浏览器支持，建议转换为MP4格式（H.264编码）';
                        } else {
                            errorDetail = '视频格式可能不被支持，建议使用MP4格式（H.264编码）';
                        }
                        break;
                    case 4: // MEDIA_ERR_SRC_NOT_SUPPORTED
                        errorMessage = '视频格式不支持';
                        if (videoExtension === 'mov') {
                            errorDetail = 'MOV格式在移动端浏览器（特别是微信）中通常不支持，强烈建议转换为MP4格式（H.264编码，.mp4扩展名）';
                        } else {
                            errorDetail = `当前浏览器不支持 ${videoType} 格式，建议转换为MP4格式（H.264编码）`;
                        }
                        break;
                    default:
                        errorMessage = '未知错误';
                        errorDetail = '请检查视频文件是否存在且格式正确';
                }
            } else {
                errorDetail = '请检查视频文件路径是否正确';
            }
            
            if (loadingDiv) loadingDiv.style.display = 'none';
            video.style.display = 'none';
            
            videoContainer.innerHTML = `
                <div class="video-error" style="padding: 40px; text-align: center; background: rgba(255, 59, 48, 0.1); border: 2px solid rgba(255, 59, 48, 0.3); border-radius: 12px; color: var(--text-primary);">
                    <p style="font-size: 18px; font-weight: 600; color: #ff3b30; margin-bottom: 10px;">${errorMessage}</p>
                    <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 15px;">${errorDetail}</p>
                    <p style="font-size: 12px; color: var(--text-secondary); opacity: 0.7; margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(0,0,0,0.1);">
                        <strong>视频路径：</strong><br>${videoPath}<br><br>
                        <strong>视频类型：</strong>${videoType}<br><br>
                        <strong>错误代码：</strong>${video.error ? video.error.code : 'N/A'}
                    </p>
                </div>
            `;
        }
        
        // 视频加载成功
        video.addEventListener('loadedmetadata', function() {
            console.log('视频元数据加载成功:', {
                videoPath: videoPath,
                duration: video.duration,
                videoWidth: video.videoWidth,
                videoHeight: video.videoHeight
            });
            if (loadingDiv) loadingDiv.style.display = 'none';
            video.style.display = 'block';
        });
        
        // 视频可以播放
        video.addEventListener('canplay', function() {
            console.log('视频可以播放:', videoPath);
        });
        
        // 视频加载错误
        video.addEventListener('error', function(e) {
            handleVideoError(e);
        });
        
        // 检查视频文件是否存在
        function checkVideoExists() {
            const testImg = new Image();
            testImg.onload = function() {
                console.log('视频文件存在，开始加载:', videoPath);
                video.load();
            };
            testImg.onerror = function() {
                console.error('视频文件不存在:', videoPath);
                handleVideoError({ code: 2, message: '文件不存在' });
            };
            // 使用HEAD请求检查文件（如果支持）
            fetch(videoPath, { method: 'HEAD' })
                .then(response => {
                    if (response.ok) {
                        console.log('视频文件存在，状态:', response.status);
                        setTimeout(() => {
                            video.load();
                        }, 100);
                    } else {
                        console.error('视频文件不存在或无法访问:', response.status);
                        handleVideoError({ code: 2, message: `HTTP ${response.status}` });
                    }
                })
                .catch(error => {
                    console.warn('无法检查视频文件（可能是CORS问题），尝试直接加载:', error);
                    setTimeout(() => {
                        video.load();
                    }, 100);
                });
        }
        
        // 开始检查并加载
        checkVideoExists();
    }
}

// 关闭模态框
function closeRecipeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
    // 停止视频播放
    const video = modalBody.querySelector('video');
    if (video) {
        video.pause();
        video.currentTime = 0;
    }
}

// 搜索功能
function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        filteredRecipes = [...recipes];
    } else {
        filteredRecipes = recipes.filter(recipe => 
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm))
        );
    }
    
    renderRecipes(filteredRecipes);
}

// 事件监听
searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// 实时搜索（可选）
searchInput.addEventListener('input', () => {
    performSearch();
});

// 关闭模态框事件
closeModal.addEventListener('click', closeRecipeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeRecipeModal();
    }
});

// ESC键关闭模态框
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeRecipeModal();
    }
});

// 微信浏览器优化
function optimizeForWeChat() {
    try {
        // 检测是否在微信浏览器中
        const isWeChat = /MicroMessenger/i.test(navigator.userAgent);
        
        if (isWeChat) {
            // 防止页面被下拉刷新
            let touchStartY = 0;
            document.addEventListener('touchstart', (e) => {
                if (e.touches && e.touches[0]) {
                    touchStartY = e.touches[0].clientY;
                }
            }, { passive: true });
            
            document.addEventListener('touchmove', (e) => {
                // 如果页面在顶部且向下滑动，阻止默认行为
                if (window.scrollY === 0 && e.touches && e.touches[0] && e.touches[0].clientY > touchStartY) {
                    e.preventDefault();
                }
            }, { passive: false });
        }
    } catch (e) {
        // 静默失败，不影响功能
    }
}

// 初始渲染
renderRecipes(recipes);

// 微信优化
optimizeForWeChat();

// 图片路径诊断函数（开发调试用）
function diagnoseImagePaths() {
    console.log('=== 图片路径诊断 ===');
    console.log('当前页面URL:', window.location.href);
    
    // 检查logo
    const logoImg = document.getElementById('logo-img');
    if (logoImg) {
        const logoUrl = new URL(logoImg.src, window.location.href).href;
        console.log('Logo路径:', logoImg.src);
        console.log('Logo完整URL:', logoUrl);
    }
    
    // 检查菜谱图片
    recipes.forEach((recipe) => {
        const fullUrl = new URL(recipe.image, window.location.href).href;
        console.log(`${recipe.name}:`, recipe.image, '->', fullUrl);
    });
}

// 延迟诊断（给图片加载时间）- 仅在开发环境
setTimeout(() => {
    // 只在本地文件或localhost时运行诊断
    if (window.location.protocol === 'file:' || 
        window.location.hostname === 'localhost' || 
        window.location.hostname === '127.0.0.1') {
        try {
            diagnoseImagePaths();
        } catch (e) {
            // 静默失败，不影响生产环境
        }
    }
}, 2000);

