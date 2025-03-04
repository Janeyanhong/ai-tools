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

// 修改 showPromptSamples 函数
function showPromptSamples() {
    const modal = document.getElementById('demo-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    modalTitle.textContent = 'Prompt咒语百宝箱';
    
    // 直接在模态框中显示内容
    modalBody.innerHTML = `
        <!-- 数据分析 -->
    <div class="category">
        <h2>📊 数据分析</h2>
        <div class="example">
            <strong>可视化分析咒语：</strong>
            <blockquote>
                "请对提供的数据进行所有可能类型的可视化探索分析（上传CSV文件格式数据）
                数据示例：
 | CustomerId | Surname  | CreditScore | Geography | Gender | Age | Tenure | Balance | NmOfPrd | HasCrCard | IsActive | EstimatedSalary | Exited |

 | 15634602   | Hargrave | 619         | France    | Female | 42  | 2      | 0       | 1       | 1         | 1        | 101348.88       | 1      |
"
                <button class="copy-btn" onclick="copyText(this.parentNode.textContent.trim())">复制</button>
            </blockquote>
            <strong>示例结果：</strong>
            <pre>通过可视化分析发现：
1. 高流失群体：年龄＞50岁、信用评分＜650、账户余额＞$10k的客户流失率高达42%
2. 地理差异：德国客户流失率（28%）＞法国（15%）＞西班牙（12%）
3. 性别差异：女性客户流失率（21%）略高于男性（18%）
4. 活跃度：过去3个月无交易记录的客户流失率高达35%


建议：建立预警模型识别高风险客户，针对德国市场推出客户忠诚计划</pre>
        </div>
    </div>

    <!-- 财报解析 -->
    <div class="category">
        <h2>📈 财报解析</h2>
        <div class="example">
            <strong>解析咒语：</strong>
            <blockquote>
                "分析XXX公司Q3财报：<br>
                - 营收同比/环比变化及原因<br>
                - 毛利率/净利率行业对比<br>
                - 非经常性损益项目<br>
                - 现金流健康状况<br>
                - 负债结构分析<br>
                - 流动/速动比率评估<br>
                - ROA/ROE指标<br>
                - 周转率行业对比<br>
                - 经营效率变化<br>
                - 潜在法律风险<br>
                - 未来重大承诺"
                <button class="copy-btn" onclick="copyText(this.parentNode.textContent.trim())">复制</button>
            </blockquote>
            
            <strong>Markdown模板：</strong>
            <pre>\`\`\`
# XXX公司Q3财报分析

## 核心财务指标
| 指标         | 当期值 | 同比变化 | 行业平均 |
|--------------|--------|----------|----------|
| 营收         | $2.1B  | +15%     | +12%     |
| 毛利率       | 42%    | -3pp     | 45%      |
| 净现金流     | $380M  | +25%     | -        |

## 关键发现
1. **营收增长驱动因素**
   - 新产品线贡献35%增量收入
   - 亚太市场同比增长42%

2. **负债结构**
   - 短期负债：$500M (流动比率1.8x)
   - 长期负债：$1.2B (资产负债率58%)

3. **风险提示**
   ![](https://via.placeholder.com/800x400?text=财务比率趋势图)
   - 存货周转天数增加至68天（行业：55天）
   - 存在$150M未决诉讼准备金
\`\`\`</pre>
        </div>
    </div>

    <!-- 行业热点 -->
    <div class="category">
        <h2>🌐 每日行业热点</h2>
        <div class="example">
            <strong>整理咒语：</strong>
            <blockquote>
                "请整理今日新能源行业重要动态：<br>
                - 政策法规变化<br>
                - 技术突破<br>
                - 市场交易数据<br>
                - 头部企业动向<br>
                - 国际形势影响"
                <button class="copy-btn" onclick="copyText(this.parentNode.textContent.trim())">复制</button>
            </blockquote>
            
            <strong>示例结果：</strong>
            <pre>📅 2023-12-01 新能源行业日报

1. **政策动态**
   - 财政部宣布延长新能源汽车购置税减免至2025年
   - 欧盟通过《电池新规》要求2030年电池回收率达90%

2. **技术创新**
   - 宁德时代发布麒麟电池量产计划（能量密度255Wh/kg）

3. **市场数据**
   ![](https://via.placeholder.com/600x300?text=锂电材料价格趋势)
   - 碳酸锂现货价跌破120,000元/吨（-7.2% WoW）

4. **企业动向**
   - 特斯拉上海工厂启动Model 3焕新版出口</pre>
        </div>
    </div>

    `;
    
    modal.style.display = 'block';
}

// 添加复制功能
function copyText(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            alert('已复制到剪贴板');
        })
        .catch(err => {
            console.error('复制失败:', err);
        });
}
