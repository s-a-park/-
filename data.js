//데이터 값 객체  / 교수님께서 txt파일을 주시기 전에 완성한 부분이라 바꾸지 않고 만들던 그대로 진행하게 되었습니다.

var cmu = new Object();
cmu.id="CMU";
cmu.link="http://domedb.perception.cs.cmu.edu/";
cmu.cate="Image";
cmu.instance="-";
cmu.task="3-D Estimation";
cmu.desc="-";
cmu.tuto="-";

var human = new Object();
human.id="Human 3.6M";
human.link="http://vision.imar.ro/human3.6m/description.php";
human.cate="Image";
human.instance="-";
human.task="3D_Human_Pose_Estimation,3D_Absolute_Human_Pose_Estimation,Human_action_generation";
human.desc="The Human3.6M dataset is one of the largest motion capture datasets, which consists of 3.6 million human poses and corresponding images captured by a high-speed motion capture system. There are 4 high-resolution progressive scan cameras to acquire video ...";

var apo = new Object();
apo.id="ApoloScape";
apo.link="http://apolloscape.auto/";
apo.cate="Image";
apo.instance="-";
apo.task="Autonomous Driving";
apo.desc="-";
apo.tuto="https://capsulesbot.com/blog/2018/08/24/apolloscape-posenet-pytorch.html";

var c10 = new Object();
c10.id="Cifar-10";
c10.link="https://www.cs.toronto.edu/~kriz/cifar.html";
c10.cate="Image";
c10.instance="60000";
c10.task="Image_Classification,Image_Generation,Graph_Classification";
c10.desc="The CIFAR-10 dataset (Canadian Institute for Advanced Research, 10 classes) is a subset of the Tiny Images dataset and consists of 60000 32x32 color images. The images are labelled with one of 10 mutually exclusive classes: airplane, automobile (but not ...";
c10.tuto="https://ermlab.com/en/blog/nlp/cifar-10-classification-using-keras-tutorial/";

var c100 = new Object();
c100.id="Cifar-100";
c100.link="http://domedb.perception.cs.cmu.edu/";
c100.cate="Image";
c100.instance="60000";
c100.task="Image_Classification,Image_Generation,Few-Shot_Image_Classification";
c100.desc="The CIFAR-10 dataset (Canadian Institute for Advanced Research, 10 classes) is a subset of the Tiny Images dataset and consists of 60000 32x32 color images. The images are labelled with one of 10 mutually exclusive classes: airplane, automobile (but not ...";
c100.tuto="-";  //5

var om = new Object();
om.id="Omniglot";
om.link="https://github.com/brendenlake/omniglot#python";
om.cate="Image";
om.instance="38300";
om.task="Few-Shot_Image_Classification,Density_Estimation,Multi-Task_Learning";
om.desc="Omniglot is a large dataset of hand-written characters with 1623 characters and 20 examples for each character. These characters are collected based upon 50 alphabets from different countries. It contains both images and strokes data. Stroke data are coo...";
om.tuto="https://towardsdatascience.com/few-shot-learning-with-prototypical-networks-87949de03ccd";

var mn = new Object();
mn.id="Mnist";
mn.link="http://yann.lecun.com/exdb/mnist/";
mn.cate="Image";
mn.instance="60000";
mn.task="Image_Classification,Image_Generation,Domain_Adaptation";
mn.desc="The MNIST database (Modified National Institute of Standards and Technology database) is a large collection of handwritten digits. It has a training set of 60,000 examples, and a test set of 10,000 examples. It is a subset of a larger NIST Special Databa...";
mn.tuto="https://towardsdatascience.com/image-classification-in-10-minutes-with-mnist-dataset-54c35b77a38d";

var ce = new Object();
ce.id="CelebA";
ce.link="http://mmlab.ie.cuhk.edu.hk/projects/CelebA.html";
ce.cate="Image";
ce.instance="-";
ce.task="Image_Classification,Image_Generation,Face_Alignment";
ce.desc="CelebFaces Attributes dataset contains 202,599 face images of the size 178×218 from 10,177 celebrities, each annotated with 40 binary labels indicating facial attributes like hair color, gender and age.";
ce.tuto="-";

var sv = new Object();
sv.id="SVHN";
sv.link="http://ufldl.stanford.edu/housenumbers/";
sv.cate="Image";
sv.instance="-";
sv.task="Image_Classification,Domain_Adaption,Semi-Supervised_Image_Classification";
sv.desc="The Street View House Number (SVHN) is a digit classification benchmark dataset that contains 600000 32×32 RGB images of printed digits (from 0 to 9) cropped from pictures of house number plates. The cropped images are centered in the digit of interest,...";
sv.tuto="-";

var st = new Object();
st.id="Street Style dataset of Matzen";
st.link="http://streetstyle.cs.cornell.edu/";
st.cate="Image";
st.instance="-";
st.task="Classification";
st.desc="-";
st.tuto="-";  //10

var pk = new Object();
pk.id="PKU VehicleID (VehicleID)";
pk.link="https://pkuml.org/resources/pku-vehicleid.html";
pk.cate="Image";
pk.instance="-";
pk.task="Vehicle_Re-Identification";
pk.desc="The “VehicleID” dataset contains CARS captured during the daytime by multiple real-world surveillance cameras distributed in a small city in China. There are 26,267 vehicles (221,763 images in total) in the entire dataset. Each image is attached with...";
pk.tuto="-";

var the = new Object();
the.id="The In-shop Clothes";
the.link="http://mmlab.ie.cuhk.edu.hk/projects/DeepFashion/InShopRetrieval.html";
the.cate="Image";
the.instance="-";
the.task="Classification";
the.desc="-";
the.tuto="-";

var ta = new Object();
ta.id="Taskonomy";
ta.link="http://taskonomy.stanford.edu/";
ta.cate="Image";
ta.instance="-";
ta.task="Depth_Estimation,Surface_Normals_Estimation";
ta.desc="Taskonomy provides a large and high-quality dataset of varied indoor scenes. ???Complete pixel-level geometric information via aligned meshes. ?Semantic information via knowledge distillation from ImageNet, MS COCO, and MIT Places. ?Globally consistent c...";
ta.tuto="-";

var cu = new Object();
cu.id="CUHK Face Sketch Database (CUFS)";
cu.link="http://www.ee.cuhk.edu.hk/~xgwang/datasets.html";
cu.cate="Image";
cu.instance="-";
cu.task="Face Sketch";
cu.desc="-";
cu.tuto="-";

var ch = new Object();
ch.id="ChestX-ray8";
ch.link="https://www.kaggle.com/nih-chest-xrays/data";
ch.cate="Image";
ch.instance="-";
ch.task="Medical Classification Image_Classification Computed_Tomography(CT)";
ch.desc="ChestX-ray8 is a medical imaging dataset which comprises 108948 frontal-view X-ray images of 32717 (collected from the year of 1992 to 2015) unique patients with the text-mined eight common disease labels mined from the text radiological reports via N...";
ch.tuto="-";  //15

var ki = new Object();
ki.id="Kitti";
ki.link="http://www.cvlibs.net/datasets/kitti/";
ki.cate="Image";
ki.instance="-";
ki.task="Object Detection Object_Detection Semantice_Segmentation Image_Super-Resolution>100 GB of data";
ki.desc="KITTI (Karlsruhe Institute of Technology and Toyota Technological Institute) is one of the most popular datasets for use in mobile robotics and autonomous driving. It consists of hours of traffic scenarios recorded with a variety of sensor modalities in...";
ki.tuto="https://github.com/joseph-zhang/KITTI-TorchLoader";

var p = new Object();
p.id="Pascal voc 2012";
p.link="http://host.robots.ox.ac.uk/pascal/VOC/voc2012/";
p.cate="Image";
p.instance="-";
p.task="Object Detection";
p.desc="-";
p.tuto="-";     // 17번

var city = new Object();
city.id="Cityscapes";
city.link="https://www.cityscapes-dataset.com/";
city.cate="Image";
city.instance="25000";
city.task="Object Detection ,Image_Generation, Semantic_Segmentation, Image-to-Image_Translation";
city.desc="Cityscapes is a large-scale database which focuses on semantic understanding of urban street scenes. It provides semantic instance-wise and dense pixel annotations for 30 classes grouped into 8 categories (flat surfaces, humans, vehicles,constructions...";
city.tuto="-";

var afl = new Object();
afl.id="AFLW";
afl.link="https://www.tugraz.at/institute/icg/research/team-bischof/lrs/downloads/aflw/";
afl.cate="Image";
afl.instance="-";
afl.task="Object Detection ,Face_Alignment, Facial_Landmark's_Detection,Low-Light_Image_Enhancement";
afl.desc="The Annotated Facial Landmarks in the Wild (AFLW) is a large-scale collection of annotated face images gathered from Flickr exhibiting a large variety in appearance (e.g. pose, expression, ethnicity, age, gender) as well as general imaging and environm...";
afl.tuto="-";

var cal = new Object();
cal.id="Caltech 101";
cal.link="http://www.vision.caltech.edu/Image_Datasets/CaltechPedestrians/";
cal.cate="Image";
cal.instance="9146";
cal.task="Object Detection, Fine-Grained_Image_Classification, Semi-Supervised_Image_Classificatino, Density_Estimation";
cal.desc="The Caltech101 dataset contains images from 101 object categories (e.g. “helicopter”, “elephant” and “chair” etc.) and a background category that contains the images not from the 101 object categories. For each object category, there are abo...";
cal.tuto="-";  //20

var cal256 = new Object();
cal256.id="Caltech 256";
cal256.link="https://authors.library.caltech.edu/7694/";
cal256.cate="Image";
cal256.instance="30607";
cal256.task="Object Detection, Few-Shot_Image_Classification, Semi-Supervised_Image_Classification";
cal256.desc="Caltech-256 is an object recognition dataset containing 30607 real-world images of different sizes spanning 257 classes (256 object classes and an additional clutter class). Each class is represented by at least 80 images. The dataset is a superset of...";
cal256.tuto="-";

var am = new Object();
am.id="Amazon";
am.link="https://docs.aws.amazon.com/rekognition/latest/customlabels-dg/cd-create-dataset.html";
am.cate="Image";
am.instance="-";
am.task="Object Detection";
am.desc="-";
am.tuto="-";

var nl = new Object();
nl.id="NLPR";
nl.link="https://www.abbreviationfinder.org/ko/acronyms/nlpr.html";
nl.cate="Image";
nl.instance="-";
nl.task="Object Detection RGB-D_Salient_Object_Detection";
nl.desc="The NLPR dataset for salient object detection consists of 1000 image pairs captured by a standard Microsoft Kinect with a resolution of 640×480. The images include indoor and outdoor scenes (e.g. offices, campuses, streets and supermarkets).";
nl.tuto="-";

var co = new Object();
co.id="COCO";
co.link="https://cocodataset.org/#home";
co.cate="Image";
co.instance="2500000";
co.task="Object Recognition Pose_Estimation Object_Detection Semantic_Segmentation";
co.desc="The MS COCO (Microsoft Common Objects in Context) dataset is a large-scale object detection segmentation key-point detection and captioning dataset. The dataset consists of 328K images. Splits: The first version of MS COCO dataset was released in 2...";
co.tuto="https://medium.com/fullstackai/how-to-train-an-object-detector-with-your-own-coco-dataset-in-pytorch-319e7090da5";

var im = new Object();
im.id="Imagenet";
im.link="http://image-net.org/about-overview";
im.cate="Image";
im.instance="14197122";
im.task="Object Recognition Image_Classification Image_Generation Few-Shot_Learning";
im.desc="The ImageNet dataset contains 14,197,122 annotated images according to the WordNet hierarchy. Since 2010 the dataset is used in the ImageNet Large Scale Visual Recognition Challenge (ILSVRC) a benchmark in image classification and object detection. The ...";
im.tuto="-";  //25

var sun = new Object();
sun.id="Sun";
sun.link="https://vision.princeton.edu/projects/2010/SUN/";
sun.cate="Image";
sun.instance="-";
sun.task="Object Recognition";
sun.desc="-";
sun.tuto="-";

var ls = new Object();
ls.id="Lsun";
ls.link="https://www.yf.io/p/lsun";
ls.cate="Image";
ls.instance="-";
ls.task="Saliency Detection Image_Generation";
ls.desc="The Large-scale Scene Understanding (LSUN) challenge aims to provide a different benchmark for large-scale scene classification and understanding. The LSUN classification dataset contains 10 scene categories  such as dining room, bedroom, chicken,outdoo...";
ls.tuto="-";

var re = new Object();
re.id="Replica";
re.link="https://github.com/facebookresearch/Replica-Dataset";
re.cate="Image";
re.instance="-";
re.task="Scene Generation Domain_Adaption Visual_Navigation Scene_Generation";
re.desc="The Replica Dataset is a dataset of high quality reconstructions of a variety of indoor spaces. Each reconstruction has clean dense geometry high resolution and high dynamic range textures glass and mirror surface information planar segmentation as we...";
re.tuto="-";

var sc = new Object();
sc.id="ScanNet";
sc.link="http://www.scan-net.org/";
sc.cate="Image";
sc.instance="-";
sc.task="Semantic Segmentation Semantic_Segmentation Depth_Estimation 3D_Reconstruction";
sc.desc="ScanNet is an instance-level indoor RGB-D dataset that includes both 2D and 3D data. It is a collection of labeled voxels rather than points or objects. Up to now ScanNet v2 the newest version of ScanNet has collected 1513 annotated scans with an appr...";
sc.tuto="-";

var ny = new Object();
ny.id="Nyu depth V1";
ny.link="https://cs.nyu.edu";
ny.cate="Image";
ny.instance="-";
ny.task="Semantic Segmentation";
ny.desc="-";
ny.tuto="-"; //30

var lip = new Object();
lip.id="Lip";
lip.link="http://sysu-hcp.net/lip/index.php";
lip.cate="Image";
lip.instance="-";
lip.task="Semantic Segmentation Semantic_Segmentation";
lip.desc="The LIP (Look into Person) dataset is a large-scale dataset focusing on semantic understanding of a person. It contains 5000 images with elaborated pixel-wise annotations of 19 semantic human part labels and 2D human poses with 16 key points. The images...";
lip.tuto="-";

var ad = new Object();
ad.id="ADE";
ad.link="https://groups.csail.mit.edu/vision/datasets/ADE20K/index.html";
ad.cate="Image";
ad.instance="-";
ad.task="Semantic Segmentation Semantic_Segmentation Image-to-Image_Translation Scene_Understanding";
ad.desc="The ADE20K semantic segmentation dataset contains more than 20K scene-centric images exhaustively annotated with pixel-level objects and object parts labels. There are totally 150 semantic categories which include stuffs like sky, road, grass and discr...";
ad.tuto="-";

var ff = new Object();
ff.id="Ffhq";
ff.link="https://github.com/NVlabs/ffhq-dataset";
ff.cate="Image";
ff.instance="-";
ff.task="Super Resolution Image_Generation Image_Super-Resolution Image_Inpainting";
ff.desc="Flickr-Faces-HQ (FFHQ) consists of 70000 high-quality PNG images at 1024×1024 resolution and contains considerable variation in terms of age ethnicity and image background. It also has good coverage of accessories such as eyeglasses, sunglasses, hats...";
ff.tuto="-";

var uc = new Object();
uc.id="UCF101";
uc.link="https://www.crcv.ucf.edu/data/UCF101.php#Results_on_UCF101";
uc.cate="Video";
uc.instance="-";
uc.task="Action Recognition Temporal_Action_Localization Action_Recognition Action_Detection";
uc.desc="UCF101 dataset is an extension of UCF50 and consists of 13320 video clips which are classified into 101 categories. These 101 categories can be classified into 5 types (Body motion Human-human interactions Human-object interactions Playing musical i...";
uc.tuto="-";

var act = new Object();
act.id="Activitynet";
act.link="http://mmlab.ie.cuhk.edu.hk/projects/CelebA.html";
act.cate="Video";
act.instance="-";
act.task="Action Recognition Temporal_Action_Localization Action_Recognition Action_Classification";
act.desc="The ActivityNet dataset contains 200 different types of activities and a total of 849 hours of videos collected from YouTube. ActivityNet is the largest benchmark for temporal activity detection to date in terms of both the number of activity categories ...";
act.tuto="-";  //35

var ntu = new Object();
ntu.id="Ntu";
ntu.link="http://rose1.ntu.edu.sg/datasets/actionrecognition.asp";
ntu.cate="Video";
ntu.instance="-";
ntu.task="Action Recognition";
ntu.desc="-";
ntu.tuto="-";

var kine = new Object();
kine.id="Kinetics";
kine.link="https://arxiv.org/abs/1705.06950";
kine.cate="Video";
kine.instance="-";
kine.task="Action Recognition Temporal_Action_Localization Video_Classification Action_Recognition";
kine.desc="The Kinetics dataset is a large-scale high-quality dataset for human action recognition in videos. The dataset consists of around 500000 video clips covering 600 human action classes with at least 600 video clips for each action class. Each video clip ...";
kine.tuto="-";

var you = new Object();
you.id="YouTube-8M Segments Dataset";
you.link="http://research.google.com/youtube8m/index.html";
you.cate="Video";
you.instance="8 million";
you.task="Classification Video_Classification Video_Prediction";
you.desc="The YouTube-8M dataset is a large scale video dataset which includes more than 7 million videos with 4716 classes labeled by the annotation system. The dataset consists of three parts: training set validate set and test set. In the training set each ...";
you.tuto="-";

var da = new Object();
da.id="DAVIS16";
da.link="https://davischallenge.org/index.html";
da.cate="Video";
da.instance="-";
da.task="Object Segmentation Video_Object_Segmentation Video_Salient_Object_Detection Unsupervised_Video_Object_Segmentation";
da.desc="DAVIS16 is a dataset for video object segmentation which consists of 50 videos in total (30 videos for training and 20 for testing). Per-frame pixel-wise annotations are offered.";
da.tuto="-";

var da7 = new Object();
da7.id="DAVIS17";
da7.link="https://davischallenge.org/index.html";
da7.cate="Video";
da7.instance="-";
da7.task="Object Segmentation Semantic_Segmentation Video_Object_Segmentation Referring_Expression_Segmentation";
da7.desc="DAVIS17 is a dataset for video object segmentation. It contains a total of 150 videos - 60 for training  30 for validation  60 for testing";
da7.tuto="-";  //40

var da8 = new Object();
da8.id="DAVIS18";
da8.link="https://davischallenge.org/index.html";
da8.cate="Video";
da8.instance="-";
da8.task="Object Segmentation";
da8.desc="-";
da8.tuto="-";

var da9 = new Object();
da9.id="DAVIS19";
da9.link="https://davischallenge.org/index.html";
da9.cate="Video";
da9.instance="-";
da9.task="Object Segmentation";
da9.desc="-";
da9.tuto="-";

var mot = new Object();
mot.id="MOT";
mot.link="https://motchallenge.net/";
mot.cate="Video";
mot.instance="-";
mot.task="Object Tracking";
mot.desc="-";
mot.tuto="-";

var vot = new Object();
vot.id="Vot";
vot.link="https://www.votchallenge.net/index.html";
vot.cate="Video";
vot.instance="-";
vot.task="Object Tracking";
vot.desc="-";
vot.tuto="-";

var dx = new Object();
dx.id="Dexter";
dx.link="http://archive.ics.uci.edu/ml//datasets/Dexter";
dx.cate="Text";
dx.instance="2600";
dx.task="Classification";
dx.desc="-";
dx.tuto="-";

var ub = new Object();
ub.id="Ubuntu Dialogue";
ub.link="https://ubuntudialogue.org/";
ub.cate="Text";
ub.instance="-";
ub.task="Dialogue Generation Dialogue_Generation Conversational_Response_Selection Answer_Selection";
ub.desc="Ubuntu Dialogue Corpus (UDC) is a dataset containing almost 1 million multi-turn dialogues  with a total of over 7 million utterances and 100 million words. This provides a unique resource for research into building dialogue managers based on neural lang..";
ub.tuto="-"; //45

var wmt = new Object();
wmt.id="Wmt19";
wmt.link="http://www.statmt.org/wmt19/";
wmt.cate="Text";
wmt.instance="-";
wmt.task="Machine Translation";
wmt.desc="-";
wmt.tuto="-";

var wmt18 = new Object();
wmt18.id="Wmt18";
wmt18.link="http://www.statmt.org/wmt18/papers.html";
wmt18.cate="Text";
wmt18.instance="-";
wmt18.task="Machine Translation Machine_Translation";
wmt18.desc="WMT 2018 is a collection of datasets used in shared tasks of the Third Conference on Machine Translation. The conference builds on a series of twelve previous annual workshops and conferences on Statistical Machine Translation. The conference featured...";
wmt18.tuto="-";

var wmt17 = new Object();
wmt17.id="Wmt17";
wmt17.link="http://www.statmt.org/wmt17/results.html";
wmt17.cate="Text";
wmt17.instance="-";
wmt17.task="Machine Translation";
wmt17.desc="-";
wmt17.tuto="-";


var wmt16 = new Object();
wmt16.id="CUHK Face Sketch Database (CUFS)";
wmt16.link="http://www.statmt.org/wmt16/";
wmt16.cate="Text";
wmt16.instance="-";
wmt16.task="Machine Translation Machine_Translation Unsupervised_Machine_Translation";
wmt16.desc="WMT 2016 is a collection of datasets used in shared tasks of the First Conference on Machine Translation. The conference builds on ten previous Workshops on statistical Machine Translation. The conference featured ten shared tasks: a news translati...";
wmt16.tuto="-";

var wmt15 = new Object();
wmt15.id="Wmt15";
wmt15.link="http://www.statmt.org/wmt15/";
wmt15.cate="Text";
wmt15.instance="-";
wmt15.task="Machine Translation Machine_Translation";
wmt15.desc="WMT 2015 is a collection of datasets used in shared tasks of the Tenth Workshop on Statistical Machine Translation. The workshop featured five tasks: a news translation task   a metrics task   a tuning task   a quality estimation task   an automatic p...";
wmt15.tuto="-";

var wmt14 = new Object();
wmt14.id="Wmt14";
wmt14.link="http://www.statmt.org/wmt14/";
wmt14.cate="Text";
wmt14.instance="-";
wmt14.task="Machine Translation Machine_Translation Unsupervised_Machine_Translation";
wmt14.desc="WMT 2014 is a collection of datasets used in shared tasks of the Ninth Workshop on Statistical Machine Translation. The workshop featured four tasks:    a news translation task  a quality estimation task   a metrics task   a medical text translation task.";
wmt14.tuto="-";

var sem = new Object();
sem.id="SemEval-2016";
sem.link="https://alt.qcri.org/semeval2016/index.php?id=tasks";
sem.cate="Text";
sem.instance="-";
sem.task="Word Sentiment";
sem.desc="-";
sem.tuto="-";

var bf = new Object();
bf.id="BFM";
bf.link="https://faces.dmi.unibas.ch/bfm/?nav=1-0&id=basel_face_model";
bf.cate="3-D Image";
bf.instance="-";
bf.task="3-D Estimation";
bf.desc="-";
bf.tuto="-";

var pix = new Object();
pix.id="Pix3D";
pix.link="http://pix3d.csail.mit.edu/";
pix.cate="3-D Image";
pix.instance="-";
pix.task="Classification 3D_Shape_Reconstruction 3D_Shape_Modeling 3D_Shape_Classification";
pix.desc="The Pix3D dataset is a large-scale benchmark of diverse image-shape pairs with pixel-level 2D-3D alignment. Pix3D has wide applications in shape-related tasks including reconstruction  retrieval  viewpoint estimation  etc.";
pix.tuto="-"; //55

var sh = new Object();
sh.id="SHREC";
sh.link="http://tosca.cs.technion.ac.il/book/shrec_robustness2010.htm";
sh.cate="3-D Image";
sh.instance="-";
sh.task="Object Recognition Gesture_Recognition Hand_Gesture_Recognition Skeleton_Based_Action_Recognition";
sh.desc="The SHREC dataset contains 14 dynamic gestures performed by 28 participants (all participants are right handed) and captured by the Intel RealSense short range depth camera. Each gesture is performed between 1 and 10 times by each participant in two way:...";
sh.tuto="-";

var sha = new Object();
sha.id="ShapenetCore";
sha.link="https://www.shapenet.org/";
sha.cate="3-D Image";
sha.instance="-";
sha.task="Semantic Segmentation";
sha.desc="-";
sha.tuto="-";

var fau = new Object();
fau.id="FAUST";
fau.link="http://faust.is.tue.mpg.de/";
fau.cate="3-D Image";
fau.instance="-";
fau.task="Semantic Segmentation Semantic_Segmentation 3D_Reconstruction 3D_Point_Cloud_Matching";
fau.desc="he FAUST dataset is a dataset of real 3D scans of humans. It contains 10 scanned human shapes in 10 different poses  resulting in a total of 100 non-watertight meshes with 6890 nodes each";
fau.tuto="-";

var scape = new Object();
scape.id="Scape";
scape.link="https://ai.stanford.edu/~drago/Projects/scape/scape.html";
scape.cate="3-D Image";
scape.instance="-";
scape.task="3-D Estimation";
scape.desc="-";
scape.tuto="-";

var voxc = new Object();
voxc.id="VoxCeleb";
voxc.link="http://www.robots.ox.ac.uk/~vgg/data/voxceleb/";
voxc.cate="Sound";
voxc.instance="-";
voxc.task="Video Reconstruction";
voxc.desc="-";
voxc.tuto="-";


// 데이터 위키 페이지에 데이터 이름 눌렀을 때 정보 뜨게하는 함수들
function change1(){
var name= document.getElementById("data_name");
name.innerText=cmu.id;

var a = document.getElementById("data1");
a.innerText=cmu.cate;

var b = document.getElementById("data2");
b.innerText=cmu.instance;

var c = document.getElementById("data3");
c.innerText=cmu.task;

var d = document.getElementById("data4");
d.innerText=cmu.desc;

var e = document.getElementById("link");
e.href=cmu.link;

var f = document.getElementById("link_tuto");
f.href = cmu.tuto;

}

function change2(){
var name= document.getElementById("data_name");
name.innerText=human.id;

var a = document.getElementById("data1");
a.innerText=human.cate;

var b = document.getElementById("data2");
b.innerText=human.instance;

var c = document.getElementById("data3");
c.innerText=human.task;

var d = document.getElementById("data4");
d.innerText=human.desc;

var e = document.getElementById("link");
e.href=human.link;

var f = document.getElementById("link_tuto");
f.href = human.tuto;

}

function change3(){
var name= document.getElementById("data_name");
name.innerText=apo.id;

var a = document.getElementById("data1");
a.innerText=apo.cate;

var b = document.getElementById("data2");
b.innerText=apo.instance;

var c = document.getElementById("data3");
c.innerText=apo.task;

var d = document.getElementById("data4");
d.innerText=apo.desc;

var e = document.getElementById("link");
e.href=apo.link;

var f = document.getElementById("link_tuto");
f.href = apo.tuto;

}

function change4(){
var name= document.getElementById("data_name");
name.innerText=c10.id;

var a = document.getElementById("data1");
a.innerText=c10.cate;

var b = document.getElementById("data2");
b.innerText=c10.instance;

var c = document.getElementById("data3");
c.innerText=c10.task;

var d = document.getElementById("data4");
d.innerText=c10.desc;

var e = document.getElementById("link");
e.href=c10.link;

var f = document.getElementById("link_tuto");
f.href = c10.tuto;

}

function change5(){
var name= document.getElementById("data_name");
name.innerText=c100.id;

var a = document.getElementById("data1");
a.innerText=c100.cate;

var b = document.getElementById("data2");
b.innerText=c100.instance;

var c = document.getElementById("data3");
c.innerText=c100.task;

var d = document.getElementById("data4");
d.innerText=c100.desc;

var e = document.getElementById("link");
e.href=c100.link;

var f = document.getElementById("link_tuto");
f.href = c100.tuto;

}

function change6(){
var name= document.getElementById("data_name");
name.innerText=om.id;

var a = document.getElementById("data1");
a.innerText=om.cate;

var b = document.getElementById("data2");
b.innerText=om.instance;

var c = document.getElementById("data3");
c.innerText=om.task;

var d = document.getElementById("data4");
d.innerText=om.desc;

var e = document.getElementById("link");
e.href=om.link;

var f = document.getElementById("link_tuto");
f.href = om.tuto;

}

function change7(){
var name= document.getElementById("data_name");
name.innerText=mn.id;

var a = document.getElementById("data1");
a.innerText=mn.cate;

var b = document.getElementById("data2");
b.innerText=mn.instance;

var c = document.getElementById("data3");
c.innerText=mn.task;

var d = document.getElementById("data4");
d.innerText=mn.desc;

var e = document.getElementById("link");
e.href=mn.link;

var f = document.getElementById("link_tuto");
f.href = mn.tuto;

}

function change8(){
var name= document.getElementById("data_name");
name.innerText=ce.id;

var a = document.getElementById("data1");
a.innerText=ce.cate;

var b = document.getElementById("data2");
b.innerText=ce.instance;

var c = document.getElementById("data3");
c.innerText=ce.task;

var d = document.getElementById("data4");
d.innerText=ce.desc;

var e = document.getElementById("link");
e.href=ce.link;

var f = document.getElementById("link_tuto");
f.href = ce.tuto;

}

function change9(){
var name= document.getElementById("data_name");
name.innerText = sv.id;

var a = document.getElementById("data1");
a.innerText = sv.cate;

var b = document.getElementById("data2");
b.innerText = sv.instance;

var c = document.getElementById("data3");
c.innerText = sv.task;

var d = document.getElementById("data4");
d.innerText = sv.desc;

var e = document.getElementById("link");
e.href = sv.link;

var f = document.getElementById("link_tuto");
f.href = sv.tuto;

}

function change10(){
var name= document.getElementById("data_name");
name.innerText=st.id;

var a = document.getElementById("data1");
a.innerText=st.cate;

var b = document.getElementById("data2");
b.innerText=st.instance;

var c = document.getElementById("data3");
c.innerText=st.task;

var d = document.getElementById("data4");
d.innerText=st.desc;

var e = document.getElementById("link");
e.href=st.link;

var f = document.getElementById("link_tuto");
f.href = st.tuto;

}

function change11(){
var name= document.getElementById("data_name");
name.innerText=pk.id;

var a = document.getElementById("data1");
a.innerText=pk.cate;

var b = document.getElementById("data2");
b.innerText=pk.instance;

var c = document.getElementById("data3");
c.innerText=pk.task;

var d = document.getElementById("data4");
d.innerText=pk.desc;

var e = document.getElementById("link");
e.href=pk.link;

var f = document.getElementById("link_tuto");
f.href = pk.tuto;

}

function change12(){
var name= document.getElementById("data_name");
name.innerText=the.id;

var a = document.getElementById("data1");
a.innerText=the.cate;

var b = document.getElementById("data2");
b.innerText=the.instance;

var c = document.getElementById("data3");
c.innerText=the.task;

var d = document.getElementById("data4");
d.innerText=the.desc;

var e = document.getElementById("link");
e.href=the.link;

var f = document.getElementById("link_tuto");
f.href = the.tuto;

}

function change13(){
var name= document.getElementById("data_name");
name.innerText=ta.id;

var a = document.getElementById("data1");
a.innerText=ta.cate;

var b = document.getElementById("data2");
b.innerText=ta.instance;

var c = document.getElementById("data3");
c.innerText=ta.task;

var d = document.getElementById("data4");
d.innerText=ta.desc;

var e = document.getElementById("link");
e.href=ta.link;

var f = document.getElementById("link_tuto");
f.href = ta.tuto;

}

function change14(){  
    var name= document.getElementById("data_name");
    name.innerText=cu.id;
    
    var a = document.getElementById("data1");
    a.innerText=cu.cate;
    
    var b = document.getElementById("data2");
    b.innerText=cu.instance;
    
    var c = document.getElementById("data3");
    c.innerText=cu.task;
    
    var d = document.getElementById("data4");
    d.innerText=cu.desc;
    
    var e = document.getElementById("link");
    e.href=cu.link;
    
    var f = document.getElementById("link_tuto");
    f.href = cu.tuto;
    
    }

    function change15(){
        var name= document.getElementById("data_name");
        name.innerText=ch.id;
        
        var a = document.getElementById("data1");
        a.innerText=ch.cate;
        
        var b = document.getElementById("data2");
        b.innerText=ch.instance;
        
        var c = document.getElementById("data3");
        c.innerText=ch.task;
        
        var d = document.getElementById("data4");
        d.innerText=ch.desc;
        
        var e = document.getElementById("link");
        e.href=ch.link;
        
        var f = document.getElementById("link_tuto");
        f.href = ch.tuto;
        
        }

        function change16(){
            var name= document.getElementById("data_name");
            name.innerText=ki.id;
            
            var a = document.getElementById("data1");
            a.innerText=ki.cate;
            
            var b = document.getElementById("data2");
            b.innerText=ki.instance;
            
            var c = document.getElementById("data3");
            c.innerText=ki.task;
            
            var d = document.getElementById("data4");
            d.innerText=ki.desc;
            
            var e = document.getElementById("link");
            e.href = ki.link;
            
            var f = document.getElementById("link_tuto");
            f.href = ki.tuto;
            
            }

            function change17(){
                var name= document.getElementById("data_name");
                name.innerText = p.id;
                
                var a = document.getElementById("data1");
                a.innerText = p.cate;
                
                var b = document.getElementById("data2");
                b.innerText = p.instance;
                
                var c = document.getElementById("data3");
                c.innerText = p.task;
                
                var d = document.getElementById("data4");
                d.innerText = p.desc;
                
                var e = document.getElementById("link");
                e.href = p.link;
                
                var f = document.getElementById("link_tuto");
                f.href = p.tuto;
                
                }

                function change18(){
                    var name= document.getElementById("data_name");
                    name.innerText=city.id;
                    
                    var a = document.getElementById("data1");
                    a.innerText=city.cate;
                    
                    var b = document.getElementById("data2");
                    b.innerText=city.instance;
                    
                    var c = document.getElementById("data3");
                    c.innerText=city.task;
                    
                    var d = document.getElementById("data4");
                    d.innerText=city.desc;
                    
                    var e = document.getElementById("link");
                    e.href=city.link;
                    
                    var f = document.getElementById("link_tuto");
                    f.href = city.tuto;
                    
                    }

                    function change19(){
                        var name= document.getElementById("data_name");
                        name.innerText=afl.id;
                        
                        var a = document.getElementById("data1");
                        a.innerText=afl.cate;
                        
                        var b = document.getElementById("data2");
                        b.innerText=afl.instance;
                        
                        var c = document.getElementById("data3");
                        c.innerText=afl.task;
                        
                        var d = document.getElementById("data4");
                        d.innerText=afl.desc;
                        
                        var e = document.getElementById("link");
                        e.href=afl.link;
                        
                        var f = document.getElementById("link_tuto");
                        f.href = afl.tuto;
                        
                        }

       function change20(){
        var name= document.getElementById("data_name");
            name.innerText=cal.id;
                            
        var a = document.getElementById("data1");
            a.innerText=cal.cate;
                            
        var b = document.getElementById("data2");
            b.innerText=cal.instance;
                            
        var c = document.getElementById("data3");
            c.innerText=cal.task;
                            
        var d = document.getElementById("data4");
        d.innerText=cal.desc;
                            
        var e = document.getElementById("link");
        e.href=cal.link;
                            
        var f = document.getElementById("link_tuto");
        f.href = cal.tuto;
                            
                            }

        function change21(){
        var name= document.getElementById("data_name");
            name.innerText=cal256.id;
                            
        var a = document.getElementById("data1");
            a.innerText=cal256.cate;
                            
        var b = document.getElementById("data2");
            b.innerText=cal256.instance;
                            
        var c = document.getElementById("data3");
            c.innerText=cal256.task;
                            
        var d = document.getElementById("data4");
        d.innerText=cal256.desc;
                            
        var e = document.getElementById("link");
        e.href=cal256.link;
                            
        var f = document.getElementById("link_tuto");
        f.href = cal256.tuto;
                            
                            }
                            
 function change22(){
 var name= document.getElementById("data_name");
 name.innerText=am.id;

var a = document.getElementById("data1");
a.innerText=am.cate;

var b = document.getElementById("data2");
b.innerText=am.instance;
                                                    
var c = document.getElementById("data3");
 c.innerText=am.task;
                                                    
var d = document.getElementById("data4");
d.innerText=am.desc;
                                                    
var e = document.getElementById("link");
e.href=am.link;
                                                    
var f = document.getElementById("link_tuto");
f.href = am.tuto;
                                                    
} 

function change23(){
    var name= document.getElementById("data_name");
    name.innerText=nl.id;

   var a = document.getElementById("data1");
   a.innerText=nl.cate;

   var b = document.getElementById("data2");
   b.innerText=nl.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=nl.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=nl.desc;
                                                       
   var e = document.getElementById("link");
   e.href=nl.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = nl.tuto;
                                                       
   } 

   function change24(){
    var name= document.getElementById("data_name");
    name.innerText=co.id;

   var a = document.getElementById("data1");
   a.innerText=co.cate;

   var b = document.getElementById("data2");
   b.innerText=co.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=co.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=co.desc;
                                                       
   var e = document.getElementById("link");
   e.href=co.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = co.tuto;
                                                       
   } 

   function change25(){
    var name= document.getElementById("data_name");
    name.innerText=im.id;

   var a = document.getElementById("data1");
   a.innerText=im.cate;

   var b = document.getElementById("data2");
   b.innerText=im.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=im.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=im.desc;
                                                       
   var e = document.getElementById("link");
   e.href=im.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = im.tuto;
                                                       
   } 

   function change26(){
    var name= document.getElementById("data_name");
    name.innerText=sun.id;

   var a = document.getElementById("data1");
   a.innerText=sun.cate;

   var b = document.getElementById("data2");
   b.innerText=sun.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=sun.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=sun.desc;
                                                       
   var e = document.getElementById("link");
   e.href=sun.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = cal.tuto;
                                                       
   } 

   function change27(){
    var name= document.getElementById("data_name");
    name.innerText=ls.id;

   var a = document.getElementById("data1");
   a.innerText=ls.cate;

   var b = document.getElementById("data2");
   b.innerText=ls.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=ls.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=ls.desc;
                                                       
   var e = document.getElementById("link");
   e.href=ls.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = ls.tuto;
                                                       
   } 

   function change28(){
    var name= document.getElementById("data_name");
    name.innerText=re.id;

   var a = document.getElementById("data1");
   a.innerText=re.cate;

   var b = document.getElementById("data2");
   b.innerText=re.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=re.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=re.desc;
                                                       
   var e = document.getElementById("link");
   e.href=re.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = re.tuto;
                                                       
   } 

   function change29(){
    var name= document.getElementById("data_name");
    name.innerText=sc.id;

   var a = document.getElementById("data1");
   a.innerText=sc.cate;

   var b = document.getElementById("data2");
   b.innerText=sc.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=sc.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=sc.desc;
                                                       
   var e = document.getElementById("link");
   e.href=sc.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = sc.tuto;
                                                       
   } 

   function change30(){
    var name= document.getElementById("data_name");
    name.innerText=ny.id;

   var a = document.getElementById("data1");
   a.innerText=ny.cate;

   var b = document.getElementById("data2");
   b.innerText=ny.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=ny.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=ny.desc;
                                                       
   var e = document.getElementById("link");
   e.href=ny.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = ny.tuto;
                                                       
   } 

   function change31(){
    var name= document.getElementById("data_name");
    name.innerText=lip.id;

   var a = document.getElementById("data1");
   a.innerText=lip.cate;

   var b = document.getElementById("data2");
   b.innerText=lip.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=lip.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=lip.desc;
                                                       
   var e = document.getElementById("link");
   e.href=lip.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = lip.tuto;
                                                       
   } 

   function change32(){
    var name= document.getElementById("data_name");
    name.innerText=ad.id;

   var a = document.getElementById("data1");
   a.innerText=ad.cate;

   var b = document.getElementById("data2");
   b.innerText=ad.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=ad.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=ad.desc;
                                                       
   var e = document.getElementById("link");
   e.href=ad.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = ad.tuto;
                                                       
   }

   function change33(){
    var name= document.getElementById("data_name");
    name.innerText=ff.id;

   var a = document.getElementById("data1");
   a.innerText=ff.cate;

   var b = document.getElementById("data2");
   b.innerText=ff.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=ff.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=ff.desc;
                                                       
   var e = document.getElementById("link");
   e.href=ff.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = ff.tuto;
                                                       
   }

   function change34(){
    var name= document.getElementById("data_name");
    name.innerText=uc.id;

   var a = document.getElementById("data1");
   a.innerText=uc.cate;

   var b = document.getElementById("data2");
   b.innerText=uc.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=uc.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=uc.desc;
                                                       
   var e = document.getElementById("link");
   e.href=uc.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = uc.tuto;
                                                       
   } 

   function change35(){
    var name= document.getElementById("data_name");
    name.innerText=act.id;

   var a = document.getElementById("data1");
   a.innerText=act.cate;

   var b = document.getElementById("data2");
   b.innerText=act.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=act.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=act.desc;
                                                       
   var e = document.getElementById("link");
   e.href=act.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = act.tuto;
                                                       
   } 

   function change36(){
    var name= document.getElementById("data_name");
    name.innerText=ntu.id;

   var a = document.getElementById("data1");
   a.innerText=ntu.cate;

   var b = document.getElementById("data2");
   b.innerText=ntu.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=ntu.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=ntu.desc;
                                                       
   var e = document.getElementById("link");
   e.href=ntu.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = ntu.tuto;
                                                       
   } 

   function change37(){
    var name= document.getElementById("data_name");
    name.innerText=kine.id;

   var a = document.getElementById("data1");
   a.innerText=kine.cate;

   var b = document.getElementById("data2");
   b.innerText=kine.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=kine.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=kine.desc;
                                                       
   var e = document.getElementById("link");
   e.href=kine.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = kine.tuto;
                                                       
   } 

   function change38(){
    var name= document.getElementById("data_name");
    name.innerText=you.id;

   var a = document.getElementById("data1");
   a.innerText=you.cate;

   var b = document.getElementById("data2");
   b.innerText=you.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=you.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=you.desc;
                                                       
   var e = document.getElementById("link");
   e.href=you.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = you.tuto;
                                                       
   } 

   function change39(){
    var name= document.getElementById("data_name");
    name.innerText=da.id;

   var a = document.getElementById("data1");
   a.innerText=da.cate;

   var b = document.getElementById("data2");
   b.innerText=da.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=da.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=da.desc;
                                                       
   var e = document.getElementById("link");
   e.href=da.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = da.tuto;
                                                       
   } 

   function change40(){
    var name= document.getElementById("data_name");
    name.innerText=da7.id;

   var a = document.getElementById("data1");
   a.innerText=da7.cate;

   var b = document.getElementById("data2");
   b.innerText=da7.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=da7.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=da7.desc;
                                                       
   var e = document.getElementById("link");
   e.href=da7.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = da7.tuto;
                                                       
   } 

   function change41(){
    var name= document.getElementById("data_name");
    name.innerText=da8.id;

   var a = document.getElementById("data1");
   a.innerText=da8.cate;

   var b = document.getElementById("data2");
   b.innerText=da8.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=da8.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=da8.desc;
                                                       
   var e = document.getElementById("link");
   e.href=da8.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = da8.tuto;
                                                       
   } 

   function change42(){
    var name= document.getElementById("data_name");
    name.innerText=da9.id;

   var a = document.getElementById("data1");
   a.innerText=da9.cate;

   var b = document.getElementById("data2");
   b.innerText=da9.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=da9.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=da9.desc;
                                                       
   var e = document.getElementById("link");
   e.href=da9.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = da9.tuto;
                                                       
   } 

   function change43(){
    var name= document.getElementById("data_name");
    name.innerText=mot.id;

   var a = document.getElementById("data1");
   a.innerText=mot.cate;

   var b = document.getElementById("data2");
   b.innerText=mot.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=mot.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=mot.desc;
                                                       
   var e = document.getElementById("link");
   e.href=mot.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = mot.tuto;
                                                       
   } 

   function change44(){
    var name= document.getElementById("data_name");
    name.innerText=vot.id;

   var a = document.getElementById("data1");
   a.innerText=vot.cate;

   var b = document.getElementById("data2");
   b.innerText=vot.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=vot.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=vot.desc;
                                                       
   var e = document.getElementById("link");
   e.href=vot.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = vot.tuto;
                                                       
   } 

   function change45(){
    var name= document.getElementById("data_name");
    name.innerText=dx.id;

   var a = document.getElementById("data1");
   a.innerText=dx.cate;

   var b = document.getElementById("data2");
   b.innerText=dx.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=dx.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=dx.desc;
                                                       
   var e = document.getElementById("link");
   e.href=dx.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = dx.tuto;
                                                       
   } 

   function change46(){
    var name= document.getElementById("data_name");
    name.innerText=ub.id;

   var a = document.getElementById("data1");
   a.innerText=ub.cate;

   var b = document.getElementById("data2");
   b.innerText=ub.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=ub.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=ub.desc;
                                                       
   var e = document.getElementById("link");
   e.href=ub.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = ub.tuto;
                                                       
   } 

   function change47(){
    var name= document.getElementById("data_name");
    name.innerText=wmt.id;

   var a = document.getElementById("data1");
   a.innerText=wmt.cate;

   var b = document.getElementById("data2");
   b.innerText=wmt.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=wmt.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=wmt.desc;
                                                       
   var e = document.getElementById("link");
   e.href=wmt.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = wmt.tuto;
                                                       
   } 

   function change48(){
    var name= document.getElementById("data_name");
    name.innerText=wmt18.id;

   var a = document.getElementById("data1");
   a.innerText=wmt18.cate;

   var b = document.getElementById("data2");
   b.innerText=wmt18.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=wmt18.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=wmt18.desc;
                                                       
   var e = document.getElementById("link");
   e.href=wmt18.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = wmt18.tuto;
                                                       
   } 

   function change49(){
    var name= document.getElementById("data_name");
    name.innerText=wmt17.id;

   var a = document.getElementById("data1");
   a.innerText=wmt17.cate;

   var b = document.getElementById("data2");
   b.innerText=wmt17.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=wmt17.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=wmt17.desc;
                                                       
   var e = document.getElementById("link");
   e.href=wmt17.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = wmt17.tuto;
                                                       
   } 

   function change50(){
    var name= document.getElementById("data_name");
    name.innerText=wmt16.id;

   var a = document.getElementById("data1");
   a.innerText=wmt16.cate;

   var b = document.getElementById("data2");
   b.innerText=wmt16.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=wmt16.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=wmt16.desc;
                                                       
   var e = document.getElementById("link");
   e.href=wmt16.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = wmt16.tuto;
                                                       
   } 

   function change51(){
    var name= document.getElementById("data_name");
    name.innerText=wmt15.id;

   var a = document.getElementById("data1");
   a.innerText=wmt15.cate;

   var b = document.getElementById("data2");
   b.innerText=wmt15.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=wmt15.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=wmt15.desc;
                                                       
   var e = document.getElementById("link");
   e.href=wmt15.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = wmt15.tuto;
                                                       
   } 

   function change52(){
    var name= document.getElementById("data_name");
    name.innerText=wmt14.id;

   var a = document.getElementById("data1");
   a.innerText=wmt14.cate;

   var b = document.getElementById("data2");
   b.innerText=wmt14.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=wmt14.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=wmt14.desc;
                                                       
   var e = document.getElementById("link");
   e.href=wmt14.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = wmt14.tuto;
                                                       
   } 

   function change53(){
    var name= document.getElementById("data_name");
    name.innerText=sem.id;

   var a = document.getElementById("data1");
   a.innerText=sem.cate;

   var b = document.getElementById("data2");
   b.innerText=sem.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=sem.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=sem.desc;
                                                       
   var e = document.getElementById("link");
   e.href=sem.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = sem.tuto;
                                                       
   }
   
   function change54(){
    var name= document.getElementById("data_name");
    name.innerText=bf.id;

   var a = document.getElementById("data1");
   a.innerText=bf.cate;

   var b = document.getElementById("data2");
   b.innerText=bf.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=bf.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=bf.desc;
                                                       
   var e = document.getElementById("link");
   e.href=bf.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = bf.tuto;
                                                       
   }

   function change55(){
    var name= document.getElementById("data_name");
    name.innerText=pix.id;

   var a = document.getElementById("data1");
   a.innerText=pix.cate;

   var b = document.getElementById("data2");
   b.innerText=pix.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=pix.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=pix.desc;
                                                       
   var e = document.getElementById("link");
   e.href=pix.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = pix.tuto;
                                                       
   }

   function change56(){
    var name= document.getElementById("data_name");
    name.innerText=sh.id;

   var a = document.getElementById("data1");
   a.innerText=sh.cate;

   var b = document.getElementById("data2");
   b.innerText=sh.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=sh.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=sh.desc;
                                                       
   var e = document.getElementById("link");
   e.href=sh.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = sh.tuto;
                                                       
   }

   function change57(){
    var name= document.getElementById("data_name");
    name.innerText=sha.id;

   var a = document.getElementById("data1");
   a.innerText=sha.cate;

   var b = document.getElementById("data2");
   b.innerText=sha.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=sha.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=sha.desc;
                                                       
   var e = document.getElementById("link");
   e.href=sha.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = sha.tuto;
                                                       
   }

   function change58(){
    var name= document.getElementById("data_name");
    name.innerText=fau.id;

   var a = document.getElementById("data1");
   a.innerText=fau.cate;

   var b = document.getElementById("data2");
   b.innerText=fau.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=fau.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=fau.desc;
                                                       
   var e = document.getElementById("link");
   e.href=fau.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = fau.tuto;
                                                       
   }

   function change59(){
    var name= document.getElementById("data_name");
    name.innerText=scape.id;

   var a = document.getElementById("data1");
   a.innerText=scape.cate;

   var b = document.getElementById("data2");
   b.innerText=scape.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=scape.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=scape.desc;
                                                       
   var e = document.getElementById("link");
   e.href=scape.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = scape.tuto;
                                                       
   }

   function change60(){
    var name= document.getElementById("data_name");
    name.innerText=voxc.id;

   var a = document.getElementById("data1");
   a.innerText=voxc.cate;

   var b = document.getElementById("data2");
   b.innerText=voxc.instance;
                                                       
   var c = document.getElementById("data3");
    c.innerText=voxc.task;
                                                       
   var d = document.getElementById("data4");
   d.innerText=voxc.desc;
                                                       
   var e = document.getElementById("link");
   e.href=voxc.link;
                                                       
   var f = document.getElementById("link_tuto");
   f.href = voxc.tuto;
                                                       
   }

                            



