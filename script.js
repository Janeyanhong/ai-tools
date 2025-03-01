// 配置基础路径
const BASE_PATH = location.hostname === 'localhost' || location.hostname === '127.0.0.1' 
    ? '' 
    : '/ai-tools';

// 设置所有图片的基础路径
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[src^="/ai-tools/"]');
    images.forEach(img => {
        img.src = img.src.replace('/ai-tools/', BASE_PATH ? BASE_PATH + '/' : '');
    });
});

// 演示功能
function showDemo(toolType) {
    const modal = document.getElementById('demo-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    // 根据工具类型设置不同的演示内容
    switch(toolType) {
        case 'mindmap':
            modalTitle.textContent = 'AI工具使用说明 - 思维导图示例';
            modalBody.innerHTML = `
                <div class="mindmap-demo">
                    <p>这是基于培训内容自动生成的思维导图示例，展示了AI工具的基本使用方法、注意事项和最佳实践。</p>
                    <div class="mindmap-content">
                        <img src="mindmap-demo/page2.svg" alt="AI工具使用说明思维导图 - 第2页" onerror="handleImageError(this)">
                        <img src="mindmap-demo/page3.svg" alt="AI工具使用说明思维导图 - 第3页" onerror="handleImageError(this)">
                        <img src="mindmap-demo/page4.svg" alt="AI工具使用说明思维导图 - 第4页" onerror="handleImageError(this)">
                        <img src="mindmap-demo/page5.svg" alt="AI工具使用说明思维导图 - 第5页" onerror="handleImageError(this)">
                        <img src="mindmap-demo/page6.svg" alt="AI工具使用说明思维导图 - 第6页" onerror="handleImageError(this)">
                    </div>
                </div>
            `;
            break;
        case 'ppt':
            modalTitle.textContent = 'AI工具使用说明 - PPT示例';
            modalBody.innerHTML = `
                <div class="mindmap-demo">
                    <p>这是基于内容自动生成的PPT示例，展示了智能排版布局、自动配图配色和多种主题模板的效果。</p>
                    <div class="mindmap-content">
                        <img src="ppt-demo/page1.svg" alt="PPT示例 - 第1页" onerror="handleImageError(this)">
                        <img src="ppt-demo/page2.svg" alt="PPT示例 - 第2页" onerror="handleImageError(this)">
                        <img src="ppt-demo/page3.svg" alt="PPT示例 - 第3页" onerror="handleImageError(this)">
                    </div>
                </div>
            `;
            break;
        case 'flowchart':
            modalTitle.textContent = 'AI工具使用说明 - 流程图示例';
            modalBody.innerHTML = `
                <div class="mindmap-demo">
                    <p>这是基于业务描述自动生成的流程图示例，展示了标准的图形样式、自动布局对齐和一键导出功能。</p>
                    <div class="mindmap-content">
                        <img src="flowchart-demo/page1.svg" alt="流程图示例 - 第1页" onerror="handleImageError(this)">
                        <img src="flowchart-demo/page2.svg" alt="流程图示例 - 第2页" onerror="handleImageError(this)">
                        <img src="flowchart-demo/page3.svg" alt="流程图示例 - 第3页" onerror="handleImageError(this)">
                    </div>
                </div>
            `;
            break;
        case 'prompt':
            modalTitle.textContent = 'Prompt提示词优化演示';
            modalBody.innerHTML = `
                <div class="demo-content">
                    <img src="images/prompt-demo.svg" alt="Prompt优化示例" style="width: 100%; max-width: 800px;">
                    <p class="demo-text">智能分析和优化提示词，提高AI输出质量</p>
                </div>
            `;
            break;
    }

    modal.style.display = 'block';
}

// 处理图片加载错误
function handleImageError(img) {
    console.error('图片加载失败:', img.src);
    img.style.display = 'none';
}

// 关闭演示窗口
function closeDemo() {
    const modal = document.getElementById('demo-modal');
    modal.style.display = 'none';
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('demo-modal');
    if (event.target == modal) {
        closeDemo();
    }
}

// 添加按键事件监听
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeDemo();
    }
});
