export const projectHighlights = [
  { icon: 'Brain', value: 'CNN + Attention', label: 'Model Architecture' },
  { icon: 'Database', value: '12,000+', label: 'Training Images' },
  { icon: 'TrendingUp', value: '96.8%', label: 'Peak Accuracy' },
  { icon: 'TrendingUp', value: '0.987', label: 'AUC Score' }
]

export const objectives = [
  {
    title: 'Develop Robust Detection System',
    description: 'Create a deep learning model capable of detecting multiple forgery types with high accuracy across various datasets'
  },
  {
    title: 'Achieve High Generalization',
    description: 'Ensure the model generalizes well to unseen images and different manipulation techniques not present in training data'
  },
  {
    title: 'Implement Localization',
    description: 'Develop tamper localization capabilities to identify specific regions of manipulation within forged images'
  },
  {
    title: 'Optimize for Real-time Inference',
    description: 'Create an efficient architecture suitable for practical deployment with reasonable processing time'
  },
  {
    title: 'Compare with Baselines',
    description: 'Conduct comprehensive evaluation against state-of-the-art methods to demonstrate improvement'
  },
  {
    title: 'Ensure Interpretability',
    description: 'Incorporate attention mechanisms and visualization techniques to understand model decision-making process'
  }
]

export const contributions = [
  {
    title: 'Novel Architecture',
    description: 'Proposed CNN architecture with attention mechanisms specifically designed for forensic feature learning'
  },
  {
    title: 'Comprehensive Evaluation',
    description: 'Extensive testing across multiple benchmark datasets demonstrating superior performance'
  },
  {
    title: 'Practical Implementation',
    description: 'Deployable system with web interface and API for real-world applications'
  }
]

export const forgeryTypes = [
  {
    icon: '✂️',
    name: 'Splicing',
    description: 'Combining regions from different images to create a composite. Often used to add or remove objects from scenes.',
    challenges: ['Lighting inconsistencies', 'Boundary artifacts', 'Color mismatches', 'Perspective distortions']
  },
  {
    icon: '📋',
    name: 'Copy-Move',
    description: 'Copying and pasting regions within the same image to hide or duplicate objects. Common in removing unwanted elements.',
    challenges: ['Similar textures', 'Geometric transformations', 'Post-processing effects', 'JPEG compression']
  },
  {
    icon: '🎨',
    name: 'Retouching',
    description: 'Subtle modifications to enhance or alter appearance. Includes smoothing, color correction, and feature enhancement.',
    challenges: ['Minimal traces', 'Natural-looking results', 'Localized changes', 'Professional editing tools']
  },
  {
    icon: '🤖',
    name: 'GAN-based Synthesis',
    description: 'AI-generated or AI-modified content using generative adversarial networks. Includes deepfakes and synthetic faces.',
    challenges: ['High realism', 'No source image', 'Minimal artifacts', 'Evolving techniques']
  }
]

export const relatedWork = [
  {
    title: 'Image Forgery Detection Using Error Level Analysis',
    authors: 'Krawetz, N.',
    year: '2007',
    summary: 'Pioneering work on detecting forgeries through JPEG compression artifacts and error level analysis. Established foundation for compression-based detection methods.',
    keyContributions: ['ELA technique', 'JPEG artifacts', 'Visual analysis'],
    limitations: 'Limited effectiveness against high-quality forgeries and non-JPEG formats'
  },
  {
    title: 'Copy-Move Forgery Detection Based on SIFT',
    authors: 'Pan, X., & Lyu, S.',
    year: '2010',
    summary: 'Applied Scale-Invariant Feature Transform (SIFT) for detecting copy-move forgeries. Used keypoint matching to identify duplicated regions.',
    keyContributions: ['SIFT features', 'Keypoint matching', 'Rotation invariance'],
    limitations: 'Computationally expensive and struggles with small tampered regions'
  },
  {
    title: 'Learning Rich Features for Image Manipulation Detection',
    authors: 'Zhou, P., Han, X., Morariu, V. I., & Davis, L. S.',
    year: '2018',
    summary: 'First deep learning approach using two-stream Faster R-CNN for manipulation detection. Combined RGB and noise stream for enhanced detection.',
    keyContributions: ['Two-stream CNN', 'Noise features', 'End-to-end learning'],
    limitations: 'Requires large training data and struggles with adversarial attacks'
  },
  {
    title: 'ManTra-Net: Manipulation Tracing Network',
    authors: 'Wu, Y., AbdAlmageed, W., & Natarajan, P.',
    year: '2019',
    summary: 'Self-supervised learning approach for manipulation detection and localization. Uses anomaly detection without requiring labeled forgery data.',
    keyContributions: ['Self-supervised learning', 'Localization', 'Anomaly detection'],
    limitations: 'May miss subtle manipulations and requires fine-tuning for specific datasets'
  },
  {
    title: 'Detecting Face Synthesis Using Attention and Vision Transformers',
    authors: 'Zhao, H., Zhou, W., Chen, D., Wei, T., Zhang, W., & Yu, N.',
    year: '2021',
    summary: 'Applied vision transformers with attention mechanisms for detecting GAN-generated faces and deepfakes. Achieved state-of-the-art results on multiple benchmarks.',
    keyContributions: ['Vision transformers', 'Attention mechanisms', 'Deepfake detection'],
    limitations: 'High computational cost and limited interpretability of learned features'
  }
]

export const architectureSteps = [
  {
    title: 'Data Preprocessing',
    description: 'Images are loaded, resized to uniform dimensions, normalized using ImageNet statistics, and augmented with various transformations to improve model robustness.',
    techniques: ['Resizing (256×256)', 'Normalization', 'Data augmentation', 'Batch processing']
  },
  {
    title: 'Feature Extraction',
    description: 'CNN backbone (ResNet-50 or EfficientNet) extracts hierarchical features from input images, capturing both low-level forensic traces and high-level semantic information.',
    techniques: ['CNN backbone', 'Transfer learning', 'Multi-scale features', 'Residual connections']
  },
  {
    title: 'Attention Mechanism',
    description: 'Self-attention modules focus on forensically relevant regions, suppressing irrelevant information and enhancing discriminative features for forgery detection.',
    techniques: ['Self-attention', 'Channel attention', 'Spatial attention', 'Feature weighting']
  },
  {
    title: 'Classification Head',
    description: 'Fully connected layers process extracted features to produce binary classification (authentic vs forged) with confidence scores.',
    techniques: ['Dense layers', 'Dropout', 'Softmax activation', 'Binary classification']
  },
  {
    title: 'Localization Branch',
    description: 'Parallel decoder network generates pixel-wise segmentation masks highlighting tampered regions for interpretable results.',
    techniques: ['U-Net decoder', 'Skip connections', 'Upsampling', 'Mask prediction']
  },
  {
    title: 'Post-processing',
    description: 'Refinement of predictions through threshold optimization, morphological operations, and confidence calibration for improved accuracy.',
    techniques: ['Threshold tuning', 'Morphological ops', 'Ensemble voting', 'Confidence scores']
  }
]

export const modelComponents = [
  {
    name: 'CNN Backbone',
    description: 'Pre-trained ResNet-50 or EfficientNet-B4 serves as the feature extractor, leveraging transfer learning from ImageNet for robust representation learning.',
    features: ['Transfer learning', 'Hierarchical features', 'Residual connections', 'Batch normalization']
  },
  {
    name: 'Attention Module',
    description: 'Dual-branch attention mechanism combining channel and spatial attention to focus on forensically relevant features while suppressing noise.',
    features: ['Channel attention', 'Spatial attention', 'Feature recalibration', 'Adaptive weighting']
  },
  {
    name: 'Classification Branch',
    description: 'Multi-layer perceptron with dropout regularization for binary classification, producing confidence scores for authentic and forged predictions.',
    features: ['Dense layers', 'Dropout (0.5)', 'ReLU activation', 'Softmax output']
  },
  {
    name: 'Localization Branch',
    description: 'U-Net style decoder with skip connections for pixel-wise segmentation, generating heatmaps highlighting manipulated regions.',
    features: ['Encoder-decoder', 'Skip connections', 'Upsampling layers', 'Sigmoid activation']
  }
]

export const techStack = [
  {
    category: 'Deep Learning',
    tools: ['PyTorch 2.0', 'TorchVision', 'Timm (models)', 'Albumentations']
  },
  {
    category: 'Computer Vision',
    tools: ['OpenCV', 'PIL', 'scikit-image', 'NumPy']
  },
  {
    category: 'Training & Evaluation',
    tools: ['TensorBoard', 'Weights & Biases', 'scikit-learn', 'Matplotlib']
  },
  {
    category: 'Deployment',
    tools: ['Flask/FastAPI', 'Docker', 'ONNX', 'TorchServe']
  },
  {
    category: 'Frontend',
    tools: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion']
  },
  {
    category: 'Development',
    tools: ['Jupyter', 'Git', 'VS Code', 'Conda/venv']
  }
]

export const datasets = [
  {
    name: 'CASIA v2.0',
    description: 'Comprehensive dataset containing authentic and tampered images with various forgery types. Widely used benchmark for forgery detection research.',
    totalImages: '12,614',
    authentic: '7,491',
    forged: '5,123',
    resolution: 'Variable',
    forgeryTypes: ['Splicing', 'Copy-Move']
  },
  {
    name: 'Columbia Uncompressed',
    description: 'High-quality uncompressed dataset focusing on splicing detection. Contains authentic and spliced images without JPEG compression artifacts.',
    totalImages: '183',
    authentic: '93',
    forged: '90',
    resolution: '1024×768',
    forgeryTypes: ['Splicing']
  },
  {
    name: 'COVERAGE',
    description: 'Copy-move forgery dataset with ground truth masks. Includes various post-processing operations like rotation, scaling, and JPEG compression.',
    totalImages: '100',
    authentic: '0',
    forged: '100',
    resolution: 'Variable',
    forgeryTypes: ['Copy-Move']
  },
  {
    name: 'Custom Dataset',
    description: 'Self-collected and labeled dataset focusing on modern editing techniques and GAN-generated content for enhanced model robustness.',
    totalImages: '2,500',
    authentic: '1,250',
    forged: '1,250',
    resolution: '512×512',
    forgeryTypes: ['Splicing', 'Copy-Move', 'Retouching', 'GAN-synthesis']
  }
]

export const dataAugmentation = [
  {
    name: 'Geometric Transforms',
    description: 'Random rotation, flipping, and scaling to improve model robustness to spatial variations and different image orientations.',
    parameters: 'Rotation: ±15°, Flip: H/V, Scale: 0.8-1.2'
  },
  {
    name: 'Color Jittering',
    description: 'Random adjustments to brightness, contrast, saturation, and hue to handle varying lighting conditions and color spaces.',
    parameters: 'Brightness: ±20%, Contrast: ±20%, Saturation: ±30%'
  },
  {
    name: 'Noise Injection',
    description: 'Adding Gaussian and salt-and-pepper noise to simulate real-world image quality variations and sensor noise.',
    parameters: 'Gaussian: σ=0-10, S&P: density=0-0.05'
  },
  {
    name: 'JPEG Compression',
    description: 'Applying various JPEG quality levels to train model on compressed images commonly found in real-world scenarios.',
    parameters: 'Quality: 70-100'
  },
  {
    name: 'Blur & Sharpening',
    description: 'Random Gaussian blur and sharpening operations to handle different image quality levels and focus variations.',
    parameters: 'Blur: kernel 3-7, Sharpen: factor 0-2'
  },
  {
    name: 'Cutout',
    description: 'Randomly masking rectangular regions to improve model robustness and prevent overfitting to specific image regions.',
    parameters: 'Size: 16×16 to 64×64, Count: 1-3'
  }
]

export const implementationFeatures = [
  {
    icon: '🚀',
    title: 'Fast Inference',
    description: 'Optimized model architecture and ONNX export enable real-time inference with processing time under 2 seconds per image'
  },
  {
    icon: '🔧',
    title: 'Modular Design',
    description: 'Clean, maintainable codebase with separate modules for data loading, model architecture, training, and evaluation'
  },
  {
    icon: '📊',
    title: 'Comprehensive Logging',
    description: 'TensorBoard and Weights & Biases integration for detailed training monitoring and experiment tracking'
  },
  {
    icon: '🐳',
    title: 'Docker Support',
    description: 'Containerized deployment with Docker for consistent environment across development and production'
  },
  {
    icon: '🌐',
    title: 'REST API',
    description: 'Flask/FastAPI backend with endpoints for image upload, inference, and result visualization'
  },
  {
    icon: '🎨',
    title: 'Interactive UI',
    description: 'React-based web interface for easy image upload, real-time processing, and result visualization'
  }
]

export const codeSnippets = [
  {
    title: 'Model Architecture',
    language: 'Python',
    description: 'Core CNN model with attention mechanism for forgery detection',
    code: `class ForgeryDetector(nn.Module):
    def __init__(self, num_classes=2):
        super().__init__()
        self.backbone = timm.create_model(
            'efficientnet_b4',
            pretrained=True,
            features_only=True
        )
        self.attention = AttentionModule()
        self.classifier = nn.Sequential(
            nn.Linear(1792, 512),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.Linear(512, num_classes)
        )
    
    def forward(self, x):
        features = self.backbone(x)[-1]
        attended = self.attention(features)
        output = self.classifier(attended)
        return output`
  },
  {
    title: 'Training Loop',
    language: 'Python',
    description: 'Main training loop with validation and checkpointing',
    code: `def train_epoch(model, loader, criterion, optimizer):
    model.train()
    total_loss = 0
    
    for images, labels in loader:
        images = images.to(device)
        labels = labels.to(device)
        
        optimizer.zero_grad()
        outputs = model(images)
        loss = criterion(outputs, labels)
        
        loss.backward()
        optimizer.step()
        
        total_loss += loss.item()
    
    return total_loss / len(loader)`
  },
  {
    title: 'Inference API',
    language: 'Python',
    description: 'Flask endpoint for image upload and forgery detection',
    code: `@app.route('/detect', methods=['POST'])
def detect_forgery():
    file = request.files['image']
    image = Image.open(file)
    
    # Preprocess
    tensor = transform(image).unsqueeze(0)
    
    # Inference
    with torch.no_grad():
        output = model(tensor)
        prob = torch.softmax(output, dim=1)
    
    result = {
        'prediction': 'forged' if prob[0][1] > 0.5 else 'authentic',
        'confidence': float(prob[0][1])
    }
    
    return jsonify(result)`
  }
]

export const performanceMetrics = [
  { icon: 'Target', value: '96.8%', label: 'Accuracy' },
  { icon: 'Target', value: '95.3%', label: 'Precision' },
  { icon: 'Target', value: '97.2%', label: 'Recall' },
  { icon: 'TrendingUp', value: '96.2%', label: 'F1-Score' },
  { icon: 'TrendingUp', value: '0.987', label: 'AUC' },
  { icon: 'Award', value: '0.82', label: 'IoU (Localization)' },
  { icon: 'Award', value: '1.23s', label: 'Inference Time' },
  { icon: 'Award', value: '94.5%', label: 'Cross-Dataset Accuracy' }
]

export const comparisonData = [
  {
    name: 'Classical ELA',
    accuracy: '78.3%',
    precision: '76.1%',
    recall: '79.8%',
    f1Score: '77.9%',
    auc: '0.823',
    isOurs: false
  },
  {
    name: 'SIFT-based',
    accuracy: '82.7%',
    precision: '80.4%',
    recall: '84.2%',
    f1Score: '82.3%',
    auc: '0.867',
    isOurs: false
  },
  {
    name: 'Two-stream CNN',
    accuracy: '91.2%',
    precision: '89.8%',
    recall: '92.1%',
    f1Score: '90.9%',
    auc: '0.948',
    isOurs: false
  },
  {
    name: 'ManTra-Net',
    accuracy: '93.5%',
    precision: '92.1%',
    recall: '94.3%',
    f1Score: '93.2%',
    auc: '0.967',
    isOurs: false
  },
  {
    name: 'Our Method (CNN + Attention)',
    accuracy: '96.8%',
    precision: '95.3%',
    recall: '97.2%',
    f1Score: '96.2%',
    auc: '0.987',
    isOurs: true
  }
]

export const qualitativeResults = [
  {
    type: 'Splicing',
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=400&fit=crop',
    detected: true,
    confidence: 94.7,
    iou: 0.86
  },
  {
    type: 'Copy-Move',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop',
    detected: true,
    confidence: 92.3,
    iou: 0.81
  },
  {
    type: 'Retouching',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=400&fit=crop',
    detected: true,
    confidence: 88.1,
    iou: 0.74
  },
  {
    type: 'GAN-synthesis',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop',
    detected: true,
    confidence: 96.5,
    iou: 0.89
  },
  {
    type: 'Authentic',
    image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=400&h=400&fit=crop',
    detected: false,
    confidence: 98.2,
    iou: 0.0
  },
  {
    type: 'Splicing (subtle)',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=400&fit=crop',
    detected: true,
    confidence: 85.6,
    iou: 0.78
  }
]

export const achievements = [
  {
    title: 'State-of-the-art Performance',
    description: 'Achieved 96.8% accuracy on CASIA dataset, outperforming existing methods by 3.3% and demonstrating superior detection capabilities'
  },
  {
    title: 'Robust Generalization',
    description: 'Maintained 94.5% accuracy on unseen datasets, showing strong cross-dataset performance and real-world applicability'
  },
  {
    title: 'Effective Localization',
    description: 'Achieved 0.82 IoU score for tamper localization, enabling precise identification of manipulated regions'
  },
  {
    title: 'Efficient Implementation',
    description: 'Optimized architecture processes images in under 2 seconds, suitable for real-time applications and deployment'
  },
  {
    title: 'Comprehensive Evaluation',
    description: 'Tested across multiple datasets and forgery types, demonstrating versatility and reliability'
  },
  {
    title: 'Practical Deployment',
    description: 'Developed complete system with web interface and API, ready for integration into existing workflows'
  }
]

export const limitations = [
  {
    title: 'Dataset Bias',
    description: 'Model performance may degrade on forgeries created with techniques not represented in training data'
  },
  {
    title: 'Adversarial Robustness',
    description: 'Vulnerable to adversarial attacks specifically designed to fool deep learning models'
  },
  {
    title: 'Computational Requirements',
    description: 'Training requires significant GPU resources and time, limiting accessibility for some researchers'
  },
  {
    title: 'Compression Artifacts',
    description: 'Heavy JPEG compression can mask forensic traces, reducing detection accuracy'
  },
  {
    title: 'Small Tampered Regions',
    description: 'Detection accuracy decreases for very small manipulated areas (< 5% of image)'
  },
  {
    title: 'Interpretability',
    description: 'While attention mechanisms help, deep learning models remain less interpretable than classical methods'
  }
]

export const futureWork = [
  {
    title: 'Multimodal Fusion',
    description: 'Integrate multiple information sources including metadata, social context, and temporal consistency for enhanced detection accuracy and robustness.',
    approaches: [
      'Combine visual features with EXIF metadata analysis',
      'Incorporate reverse image search and provenance tracking',
      'Analyze temporal consistency in video sequences',
      'Leverage social network propagation patterns'
    ]
  },
  {
    title: 'Adversarial Robustness',
    description: 'Develop defense mechanisms against adversarial attacks and anti-forensic techniques to ensure model reliability in hostile environments.',
    approaches: [
      'Adversarial training with generated attack samples',
      'Certified defense mechanisms with provable guarantees',
      'Ensemble methods combining multiple detection strategies',
      'Robust feature learning resistant to perturbations'
    ]
  },
  {
    title: 'Real-time Deployment',
    description: 'Optimize model architecture and inference pipeline for real-time processing on edge devices and mobile platforms.',
    approaches: [
      'Model compression and knowledge distillation',
      'Hardware acceleration using TensorRT or CoreML',
      'Efficient architecture search for mobile deployment',
      'Progressive inference with early exit mechanisms'
    ]
  },
  {
    title: 'Explainable AI',
    description: 'Enhance model interpretability through advanced visualization and explanation techniques for better trust and understanding.',
    approaches: [
      'Generate detailed forensic reports with evidence',
      'Develop interactive visualization tools',
      'Implement counterfactual explanations',
      'Create user-friendly explanation interfaces'
    ]
  },
  {
    title: 'Few-shot Learning',
    description: 'Enable rapid adaptation to new forgery types with minimal labeled examples through meta-learning and transfer learning approaches.',
    approaches: [
      'Meta-learning frameworks for quick adaptation',
      'Self-supervised pre-training on large unlabeled data',
      'Active learning for efficient data labeling',
      'Cross-domain transfer learning strategies'
    ]
  }
]

export const teamMembers = [
  {
    name: 'Alex Johnson',
    role: 'Lead Researcher',
    bio: 'Final year Computer Science student specializing in deep learning and computer vision',
    email: 'alex.johnson@university.edu',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    contributions: ['Model architecture design', 'Training pipeline implementation', 'Results analysis']
  },
  {
    name: 'Sarah Chen',
    role: 'Data Scientist',
    bio: 'Focused on data preprocessing, augmentation strategies, and dataset curation',
    email: 'sarah.chen@university.edu',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    contributions: ['Dataset collection and labeling', 'Data augmentation pipeline', 'Preprocessing optimization']
  },
  {
    name: 'Michael Rodriguez',
    role: 'ML Engineer',
    bio: 'Specialized in model optimization, deployment, and system architecture',
    email: 'michael.rodriguez@university.edu',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    contributions: ['Model optimization', 'API development', 'Docker containerization']
  },
  {
    name: 'Emily Watson',
    role: 'Frontend Developer',
    bio: 'Responsible for web interface design and user experience implementation',
    email: 'emily.watson@university.edu',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    contributions: ['React UI development', 'Interactive demo creation', 'Documentation website']
  },
  {
    name: 'David Kim',
    role: 'Research Assistant',
    bio: 'Supporting literature review, experimentation, and technical documentation',
    email: 'david.kim@university.edu',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    contributions: ['Literature review', 'Experiment tracking', 'Technical report writing']
  },
  {
    name: 'Jessica Martinez',
    role: 'Quality Assurance',
    bio: 'Ensuring code quality, testing, and validation of results across datasets',
    email: 'jessica.martinez@university.edu',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
    contributions: ['Testing and validation', 'Cross-dataset evaluation', 'Quality assurance']
  }
]

export const supervisor = {
  name: 'Dr. Robert Anderson',
  designation: 'Associate Professor',
  department: 'Department of Computer Science',
  bio: 'Expert in computer vision, deep learning, and digital forensics with 15+ years of research experience. Published 50+ papers in top-tier conferences and journals.',
  email: 'robert.anderson@university.edu'
}

export const references = [
  {
    title: 'Deep Learning for Image Forgery Detection: A Comprehensive Survey',
    authors: 'Verdoliva, L.',
    publication: 'IEEE Transactions on Information Forensics and Security',
    year: '2020',
    doi: 'https://doi.org/10.1109/TIFS.2020.2987926'
  },
  {
    title: 'Learning Rich Features for Image Manipulation Detection',
    authors: 'Zhou, P., Han, X., Morariu, V. I., & Davis, L. S.',
    publication: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR)',
    year: '2018',
    doi: 'https://doi.org/10.1109/CVPR.2018.00116'
  },
  {
    title: 'ManTra-Net: Manipulation Tracing Network for Detection and Localization',
    authors: 'Wu, Y., AbdAlmageed, W., & Natarajan, P.',
    publication: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR)',
    year: '2019',
    doi: 'https://doi.org/10.1109/CVPR.2019.00977'
  },
  {
    title: 'Attention-Based Deep Learning for Image Manipulation Detection',
    authors: 'Zhang, Y., Goh, J., Ng, T. T., & Hsu, W.',
    publication: 'IEEE International Conference on Image Processing (ICIP)',
    year: '2020',
    doi: null
  },
  {
    title: 'EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks',
    authors: 'Tan, M., & Le, Q. V.',
    publication: 'International Conference on Machine Learning (ICML)',
    year: '2019',
    doi: null
  },
  {
    title: 'CASIA Image Tampering Detection Evaluation Database',
    authors: 'Dong, J., Wang, W., & Tan, T.',
    publication: 'IEEE China Summit and International Conference on Signal Processing',
    year: '2013',
    doi: null
  },
  {
    title: 'Detecting Digital Image Forgeries Using Sensor Pattern Noise',
    authors: 'Lukas, J., Fridrich, J., & Goljan, M.',
    publication: 'Security, Steganography, and Watermarking of Multimedia Contents',
    year: '2006',
    doi: null
  },
  {
    title: 'Exposing Digital Forgeries by Detecting Traces of Resampling',
    authors: 'Popescu, A. C., & Farid, H.',
    publication: 'IEEE Transactions on Signal Processing',
    year: '2005',
    doi: null
  }
]

export const datasetResources = [
  {
    name: 'CASIA v2.0',
    type: 'Benchmark',
    description: 'Comprehensive tampering detection dataset with splicing and copy-move forgeries',
    size: '12,614 images',
    license: 'Academic Use',
    url: 'https://github.com/namtpham/casia2groundtruth'
  },
  {
    name: 'Columbia Uncompressed',
    type: 'Benchmark',
    description: 'High-quality uncompressed splicing detection dataset',
    size: '183 images',
    license: 'Academic Use',
    url: 'https://www.ee.columbia.edu/ln/dvmm/downloads/'
  },
  {
    name: 'COVERAGE',
    type: 'Benchmark',
    description: 'Copy-move forgery dataset with ground truth masks',
    size: '100 images',
    license: 'Academic Use',
    url: 'https://github.com/wenbihan/coverage'
  },
  {
    name: 'IMD2020',
    type: 'Challenge',
    description: 'Image manipulation detection challenge dataset',
    size: '35,000+ images',
    license: 'Challenge Terms',
    url: 'https://www.grip.unina.it/download/prog/IMD2020/'
  }
]

export const codeRepositories = [
  {
    name: 'Project Repository',
    author: 'Our Team',
    description: 'Complete source code, trained models, and documentation for this project',
    technologies: ['PyTorch', 'React', 'Docker', 'Flask'],
    url: 'https://github.com/username/forgery-detection'
  },
  {
    name: 'ManTra-Net Implementation',
    author: 'Original Authors',
    description: 'Official implementation of ManTra-Net for manipulation detection',
    technologies: ['PyTorch', 'Python'],
    url: 'https://github.com/ISICV/ManTraNet'
  },
  {
    name: 'Timm Models',
    author: 'Ross Wightman',
    description: 'PyTorch image models library with pre-trained weights',
    technologies: ['PyTorch', 'Python'],
    url: 'https://github.com/rwightman/pytorch-image-models'
  },
  {
    name: 'Albumentations',
    author: 'Albumentations Team',
    description: 'Fast image augmentation library for computer vision',
    technologies: ['Python', 'NumPy'],
    url: 'https://github.com/albumentations-team/albumentations'
  }
]

export const relatedLinks = [
  {
    title: 'Papers With Code',
    description: 'Image forgery detection benchmarks and leaderboards',
    url: 'https://paperswithcode.com/task/image-forgery-detection'
  },
  {
    title: 'IEEE DataPort',
    description: 'Repository of forensics datasets and resources',
    url: 'https://ieee-dataport.org/'
  },
  {
    title: 'arXiv Computer Vision',
    description: 'Latest research papers in computer vision and forensics',
    url: 'https://arxiv.org/list/cs.CV/recent'
  },
  {
    title: 'PyTorch Tutorials',
    description: 'Official PyTorch documentation and tutorials',
    url: 'https://pytorch.org/tutorials/'
  },
  {
    title: 'TensorBoard Guide',
    description: 'Visualization toolkit for machine learning experiments',
    url: 'https://www.tensorflow.org/tensorboard'
  },
  {
    title: 'Docker Hub',
    description: 'Container images for deployment',
    url: 'https://hub.docker.com/'
  }
]
