/*
Navicat MySQL Data Transfer

Source Server         : pifahu
Source Server Version : 50709
Source Host           : localhost:3306
Source Database       : products

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2018-10-22 17:23:53
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart_inf
-- ----------------------------
DROP TABLE IF EXISTS `cart_inf`;
CREATE TABLE `cart_inf` (
  `cart_id` int(6) NOT NULL AUTO_INCREMENT,
  `user_id` int(6) NOT NULL,
  `goods_id` int(6) NOT NULL,
  `goods_num` int(6) DEFAULT NULL,
  PRIMARY KEY (`cart_id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart_inf
-- ----------------------------
INSERT INTO `cart_inf` VALUES ('12', '14', '3', null);

-- ----------------------------
-- Table structure for pro_inf
-- ----------------------------
DROP TABLE IF EXISTS `pro_inf`;
CREATE TABLE `pro_inf` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `src` varchar(255) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `pri` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pro_inf
-- ----------------------------
INSERT INTO `pro_inf` VALUES ('1', '../img/v16.jpg', 'LEKANI 925纯银五心形镶石戒...', '17.80');
INSERT INTO `pro_inf` VALUES ('2', '../img/c9.jpg', 'LEKANI 925纯银花型开口戒指...', '15.50');
INSERT INTO `pro_inf` VALUES ('3', '../img/mifeng.jpg', '小蜜蜂戒指镀18K金镶钻时尚个...', '6.00');
INSERT INTO `pro_inf` VALUES ('4', '../img/a5.jpg', 'wish饰品ebay速卖通亚马逊爆...', '7.10');
INSERT INTO `pro_inf` VALUES ('5', '../img/a7.jpg', '欧美外贸跨境爆款925纯银心形...', '4.00');
INSERT INTO `pro_inf` VALUES ('6', '../img/a9.jpg', 'KYZC 跨境专供平台畅销首饰戒...', '5.00');
INSERT INTO `pro_inf` VALUES ('7', '../img/a11.jpg', '欧美跨境创意个性时尚转运圈..', '14.00');
INSERT INTO `pro_inf` VALUES ('8', '../img/a13.jpg', 's925纯银双T字型情侣戒指 韩...', '22.00');
INSERT INTO `pro_inf` VALUES ('9', '../img/a1.png', 'LEKANI 水晶来自施华洛世奇...', '56.99');
INSERT INTO `pro_inf` VALUES ('10', '../img/a6.jpg', 'LEKANI  水晶施华洛世奇元素...', '46.99');
INSERT INTO `pro_inf` VALUES ('11', '../img/d2.jpg', 'S925纯银爱心项链满钻爱心吊..', '25.00');
INSERT INTO `pro_inf` VALUES ('12', '../img/d3.jpg', 'Tuswans 流行时尚高抛光圆润...', '10.00');
INSERT INTO `pro_inf` VALUES ('13', '../img/d8.jpg', 'XUPING 时尚镶石镀玫瑰金项链', '25.20');
INSERT INTO `pro_inf` VALUES ('14', '../img/e1.jpg', 'S925纯银扇形项链女镂空小裙..', '33.80');
INSERT INTO `pro_inf` VALUES ('15', '../img/e4.jpg', '潮流新款颈链项链批发日韩网...', '49.00');
INSERT INTO `pro_inf` VALUES ('16', '../img/r2.jpg', 'QIANSEYE 千色叶 纯银微笑...', '33.70');
INSERT INTO `pro_inf` VALUES ('17', '../img/a15.jpg', 'LEKANI 来自施华洛世奇元素', '84.99');
INSERT INTO `pro_inf` VALUES ('18', '../img/c3.jpg', '韩版锆石夸张防过敏女欧美金...', '3.70');
INSERT INTO `pro_inf` VALUES ('19', '../img/c4.jpg', '欧美新款水滴形耳环 弧形铜...', '13.80');
INSERT INTO `pro_inf` VALUES ('20', '../img/c7.jpg', 'KCALOE 韩版甜美 绿色天然...', '13.60');
INSERT INTO `pro_inf` VALUES ('21', '../img/c8.jpg', '欧美复古镂空耳环四件套 锆石...', '4.20');
INSERT INTO `pro_inf` VALUES ('22', '../img/c13.jpg', '义乌新光饰品夏季水滴经典风...', '20.30');
INSERT INTO `pro_inf` VALUES ('23', '../img/d12.jpg', '欧美简约水滴梨形镶锆石耳饰...', '8.00');
INSERT INTO `pro_inf` VALUES ('24', '../img/x2.jpg', 'LEKANI 来自施华洛世奇元素...', '47.09');
INSERT INTO `pro_inf` VALUES ('25', '../img/d11.jpg', 'LEKANI 来自施华洛世奇元素...', '68.99');
INSERT INTO `pro_inf` VALUES ('26', '../img/d10.jpg', '依娜丽饰手镯 时尚潮流手镯..', '24.90');
INSERT INTO `pro_inf` VALUES ('27', '../img/d15.jpg', 'XUPING 珍珠开口镶锆石手镯', '26.00');
INSERT INTO `pro_inf` VALUES ('28', '../img/e3.jpg', 'OPK 新款工厂批发 欧美潮流..', '22.00');
INSERT INTO `pro_inf` VALUES ('29', '../img/j1.jpg', 'S925纯银时尚二合一手镯微..', '44.00');
INSERT INTO `pro_inf` VALUES ('30', '../img/j18.jpg', '925纯银恶魔之眼项链女日..', '45.50');
INSERT INTO `pro_inf` VALUES ('31', '../img/u2.jpg', 'QIANSEYE 千色叶 纯银s92..', '32.00');
INSERT INTO `pro_inf` VALUES ('32', '../img/u9.jpg', '【钛魅】欧美潮流手镯 钛钢...', '7.00');
INSERT INTO `pro_inf` VALUES ('33', '../img/x8.jpg', 'LEKANI 来自施华洛世奇元素..', '46.99');
INSERT INTO `pro_inf` VALUES ('34', '../img/x5.jpg', 'LEKANI 来自施华洛世奇元素..', '28.99');
INSERT INTO `pro_inf` VALUES ('35', '../img/v19.jpg', 'wish新款 欧美时尚复古船锚..', '50.21');
INSERT INTO `pro_inf` VALUES ('36', '../img/v11.jpg', '义乌新光饰品夏季合金小清新..', '45.40');
INSERT INTO `pro_inf` VALUES ('37', '../img/v12.jpg', '欧美流行时尚大小四叶草爱..', '15.80');
INSERT INTO `pro_inf` VALUES ('38', '../img/v7.jpg', 's925纯银日韩版女双爱心缕..', '45.50');
INSERT INTO `pro_inf` VALUES ('39', '../img/u4.jpg', '纯银手链现货批发定制加工', '28.00');
INSERT INTO `pro_inf` VALUES ('40', '../img/s1.jpg', 'OPK 韩版简约双层镶钻手环', '13.50');
INSERT INTO `pro_inf` VALUES ('41', '../img/a8.jpg', '又一银脚链 时尚镂空圆形..', '41.20');
INSERT INTO `pro_inf` VALUES ('42', '../img/a10.jpg', '又一银 镂空脚链 饰品批发商...', '15.65');
INSERT INTO `pro_inf` VALUES ('43', '../img/a12.jpg', '又一银脚链 女款时尚脚链 ..', '21.30');
INSERT INTO `pro_inf` VALUES ('44', '../img/a14.jpg', 'LKNSPCA034-B-2', '31.30');
INSERT INTO `pro_inf` VALUES ('45', '../img/c15.jpg', '欧美热销时尚复古雕花大象..', '36.21');
INSERT INTO `pro_inf` VALUES ('46', '../img/x11.jpg', '欧美范时尚气质树叶小象手..', '15.50');
INSERT INTO `pro_inf` VALUES ('47', '../img/e26.jpg', '波西米亚风心无限亮片脚链..', '9.80');
INSERT INTO `pro_inf` VALUES ('48', '../img/j14.jpg', '欧美时尚热卖手链 瑜伽沙..', '13.30');

-- ----------------------------
-- Table structure for user_inf
-- ----------------------------
DROP TABLE IF EXISTS `user_inf`;
CREATE TABLE `user_inf` (
  `user_id` int(6) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `user_qq` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_phone` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_inf
-- ----------------------------
INSERT INTO `user_inf` VALUES ('7', 'hgj', '997207868', '123456', '15577156685');
INSERT INTO `user_inf` VALUES ('9', 'liu', '', '123456', '13649857456');
INSERT INTO `user_inf` VALUES ('14', 'hh', '', '123456', '15577156685');
SET FOREIGN_KEY_CHECKS=1;
