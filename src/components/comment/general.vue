<template>
    <div>
        	<div class="hbl-comm">
				<button type="submit" class="comment-submit" @click="submitComment">
							发表评论
				</button>
			<div class="comment-avatar" v-if="showAvatar">
			<avatar :avatar="avatar"></avatar>
			</div>
			<div class="comment" :style="{width:commentWidth}">
				<el-input
				  resize="none"
				  style="height:64px"
				  @focus="showButton(0)"
				  type="textarea"
				  :autosize="{ minRows: minRows, maxRows: maxRows}"
				  :placeholder=placeholder
				  v-model="comment">
				</el-input>
			
				 <div  class="hbl-owo">
					 	<div :class="pBodyMap[0]?'OwO':'OwO OwO-open'" class="emoj publish" :style="{width:emojiWidth}">
		                    <div class="OwO-logo" @click="pBodyStatus(0)">
		                        <span>Emoji表情</span>
		                    </div>
		                    <div class="OwO-body">
		                        <ul class="OwO-items OwO-items-show">
		                            <li class="OwO-item" v-for="(oitem,index) in OwOlist" :key="'oitem'+index" @click="choseEmoji(0,oitem.title)">
		                                <img :src="require('../img/face/'+oitem.url)" alt="">
		                            </li>
		                        </ul>
		                       
		                    </div>
		                </div>
					
				 </div>

			</div>
		</div>





		<div v-for="(item,index) in commentList" class="hbl-child" v-bind:key="index">
			<div class="reply">
			</div>
			<div class="content">
				<div class="comment-f">
					<avatar :avatar="item.img?item.img:avatar" ></avatar>
				</div>
				
				<div  class="comment-f">
					<div>
						<div class="nickname author">
							{{item.username}}
						</div>
						<svg class="lv-icon" aria-hidden="true">
                            	<use xlink:href="#icon-dengji"></use>
                        </svg>
						

						
					</div>
				</div>

				 <div class="comment-content" v-html="analyzeEmoji(item.content)">
					 {{analyzeEmoji(item.content)}}

					
				</div>
				 <div class="info">
						<div class="date">
								{{item.createTime | dateFmt('YYYY-MM-DD HH:mm')}}
						</div>
						<span class="like">
							<svg class="small-icon" aria-hidden="true">
                            	<use xlink:href="#icon-zan1"></use>
                        	</svg>
							{{item.praiseNum}}
						</span>
						<span class="hate">
							<svg class="small-icon" aria-hidden="true">
                            	<use xlink:href="#icon-zan1-copy"></use>
                        	</svg>
						
						</span>
						<span class="replyButton" @click="showReply(item.username,index,item.id,item.uid)">
							回复
						</span>
				</div>
					
			<div class="children" v-for="(ritem,rindex) in item.replyList" v-bind:key="rindex">
				<div class="reply">
				</div>
				<div class="content">
						<div class="comment-f">
							<avatar :avatar="ritem.img?ritem.img:avatar" style="width:24px;height:24px"></avatar>
						</div>
								
						<div  class="comment-f" style="display:inline-block">
							<div>
								<div class="nickname author">
									{{ritem.username}}
								</div>
								<svg class="lv-icon" aria-hidden="true">
                            		<use xlink:href="#icon-dengji"></use>
                        		</svg>
							</div>
						</div>

						<div class="reply-content" style="display:inline-block">
							<div class="cc cc-to" v-if="ritem.rusername">
								回复:<a href="#">{{ritem.rusername}}</a>
							</div>

							 <div class="cc" v-html="analyzeEmoji(ritem.content)">{{analyzeEmoji(ritem.content)}}</div>
						</div>

						<div class="reply-info">
							<div class="date">
									{{item.createDate  | dateFmt('YYYY-MM-DD HH:mm')}}
							</div>
							<span class="like">
								<svg class="small-icon" aria-hidden="true">
									<use xlink:href="#icon-zan1"></use>
								</svg>
								2318
							</span>
							<span class="hate">
								<svg class="small-icon" aria-hidden="true">
									<use xlink:href="#icon-zan1-copy"></use>
								</svg>
							
							</span>
							<span class="replyButton" @click="showReply(ritem.username,index,item.id,ritem.uid)">
								回复
							</span>
				 		</div>

				</div>
			</div>
			<div class="reply-textarea"  v-if="isShowReply[index]">
					<button type="submit" class="comment-submit" @click="submitReply(index)">
								发表评论
					</button>
					<div class="comment-avatar">
						<avatar :avatar="avatar"></avatar>
					</div>
					<div class="comment" :style="{width:commentWidth}">
						<el-input
						resize="none"
						style="height:64px"
						@focus="showButton(0)"
						type="textarea"
						:autosize="{ minRows: minRows, maxRows: maxRows}"
						:placeholder=replyPlaceholder
						v-model="textareaMap[index]">
						</el-input>
					
						<div  class="hbl-owo">
								<div :class="pBodyMap[0]?'OwO':'OwO OwO-open'" class="emoj publish" :style="{width:emojiWidth}">
									<div class="OwO-logo" @click="pBodyStatus(0)">
										<span>Emoji表情</span>
									</div>
									<div class="OwO-body">
										<ul class="OwO-items OwO-items-show">
											<li class="OwO-item" v-for="(oitem,index) in OwOlist" :key="'oitem'+index" @click="choseEmoji(0,oitem.title)">
												<img :src="require('../img/face/'+oitem.url)" alt="">
											</li>
										</ul>
									
									</div>
								</div>
							
						</div>

					</div>
			</div>
		</div>
		</div>
    </div>
</template>
<script>
    import avatar from '../Avatar.vue'
	export default {
	  props:{
		commentList:Array,
	  	emojiWidth:{
	  		type:String,
	  		default:'560px'
	  	},
	  	showAvatar:{
	  		type:Boolean,
	  		default:true
	  	},	
	  	avatar:{
	  		type:String,
	  		default:''
	  	},
	  	placeholder:{
	  		type:String,
	  		default:'在此输入评论内容...'
	  	},
	  	minRows:{
	  		type:Number,
	  		default:2.5
	  	},
	  	maxRows:{
	  		type:Number,
	  		default:2.5	
	  	},
	  	commentNum:{
	  		type:Number,
	  		default:2
	  	},
	  	authorId:{
	  		type:Number,
	  		default:1
	  	},
	  	label:{
	  		type:String,
	  		default:'作者'
	  	},
       commentWidth:{
       	type:String,
       	default:'80%',
       }

	  },	
	  data() {
	    return {
			replyPlaceholder:null,
			nowCommentId:null,
			nowTargetUserId:null,
			comment:null,
			commentsList:[],
			nowTextarea:null,
			nowReply:-1,
			isShowReply:[],
			replyMap:[
				],
			buttonMap:[],	
			pBodyMap:[true],
			textareaMap:[],
                OwOlist:[//表情包和表情路径
                    {'title':'微笑','url':'weixiao.gif'},
                   {'title':'嘻嘻','url':'xixi.gif'},
                   {'title':'哈哈','url':'haha.gif'},
                   {'title':'可爱','url':'keai.gif'},
                   {'title':'可怜','url':'kelian.gif'},
                   {'title':'挖鼻','url':'wabi.gif'},
                   {'title':'吃惊','url':'chijing.gif'},
                   {'title':'害羞','url':'haixiu.gif'},
                   {'title':'挤眼','url':'jiyan.gif'},
                   {'title':'闭嘴','url':'bizui.gif'},
                   {'title':'鄙视','url':'bishi.gif'},
                   {'title':'爱你','url':'aini.gif'},
                   {'title':'泪','url':'lei.gif'},
                   {'title':'偷笑','url':'touxiao.gif'},
                   {'title':'亲亲','url':'qinqin.gif'},
                   {'title':'生病','url':'shengbing.gif'},
                   {'title':'太开心','url':'taikaixin.gif'},
                   {'title':'白眼','url':'baiyan.gif'},
                   {'title':'右哼哼','url':'youhengheng.gif'},
                   {'title':'左哼哼','url':'zuohengheng.gif'},
                   {'title':'嘘','url':'xu.gif'},
                   {'title':'衰','url':'shuai.gif'},
                   {'title':'吐','url':'tu.gif'},
                   {'title':'哈欠','url':'haqian.gif'},
                   {'title':'抱抱','url':'baobao.gif'},
                   {'title':'怒','url':'nu.gif'},
                   {'title':'疑问','url':'yiwen.gif'},
                   {'title':'馋嘴','url':'chanzui.gif'},
                   {'title':'拜拜','url':'baibai.gif'},
                   {'title':'思考','url':'sikao.gif'},
                   {'title':'汗','url':'han.gif'},
                   {'title':'困','url':'kun.gif'},
                   {'title':'睡','url':'shui.gif'},
                   {'title':'钱','url':'qian.gif'},
                   {'title':'失望','url':'shiwang.gif'},
                   {'title':'酷','url':'ku.gif'},
                   {'title':'色','url':'se.gif'},
                   {'title':'哼','url':'heng.gif'},
                   {'title':'鼓掌','url':'guzhang.gif'},
                   {'title':'晕','url':'yun.gif'},
                   {'title':'悲伤','url':'beishang.gif'},
                   {'title':'抓狂','url':'zhuakuang.gif'},
                   {'title':'黑线','url':'heixian.gif'},
                   {'title':'阴险','url':'yinxian.gif'},
                   {'title':'怒骂','url':'numa.gif'},
                   {'title':'互粉','url':'hufen.gif'},
                   {'title':'书呆子','url':'shudaizi.gif'},
                   {'title':'愤怒','url':'fennu.gif'},
                   {'title':'感冒','url':'ganmao.gif'},
                   {'title':'心','url':'xin.gif'},
                   {'title':'伤心','url':'shangxin.gif'},
                   {'title':'猪','url':'zhu.gif'},
                   {'title':'熊猫','url':'xiongmao.gif'},
                   {'title':'兔子','url':'tuzi.gif'},
                   {'title':'喔克','url':'ok.gif'},
                   {'title':'耶','url':'ye.gif'},
                   {'title':'棒棒','url':'good.gif'},
                   {'title':'不','url':'no.gif'},
                   {'title':'赞','url':'zan.gif'},
                   {'title':'来','url':'lai.gif'},
                   {'title':'弱','url':'ruo.gif'},
                   {'title':'草泥马','url':'caonima.gif'},
                   {'title':'神马','url':'shenma.gif'},
                   {'title':'囧','url':'jiong.gif'},
                   {'title':'浮云','url':'fuyun.gif'},
                   {'title':'给力','url':'geili.gif'},
                   {'title':'围观','url':'weiguan.gif'},
                   {'title':'威武','url':'weiwu.gif'},
                   {'title':'话筒','url':'huatong.gif'},
                   {'title':'蜡烛','url':'lazhu.gif'},
                   {'title':'蛋糕','url':'dangao.gif'},
                   {'title':'发红包','url':'fahongbao.gif'}
                ]
	    }
	  },
	  components:{
			avatar
		},
		    methods: { //事件处理器

		    	showButton(index){
		    		//this.showFlag = true;
		    		console.log(index+"index");
		    		
		    	},
		    	cancel(index){
		    		this.$set(this.buttonMap,index,false)
		    		if(index!==0){
		    			this.$set(this.replyMap,index,false)
		    		}
		    		console.log(index+"index");
		    		//this.showFlag = false;
		    	},
	          doSend(){
	          	//console.log("====="+this.textarea);
	          	this.$emit("doSend",this.textareaMap[0]);
	          	this.$set(this.textareaMap,0,'')
	          },
	          doChidSend(index,commentUserId,pid){
	          	this.$emit("doChidSend",this.textareaMap[index],commentUserId,pid);
          		this.$set(this.textareaMap,index,'')
	          },
	       
	          //选择表情包
	          choseEmoji:function(index,inner){
	          		var con = '';
	          		if(!this.textareaMap[index]){
	          			this.$set(this.textareaMap,index,'')
	          		}
	          		con = this.textareaMap[index] +='[' + inner + ']';
					this.$set(this.textareaMap,index,con)
	      			
	          },
	          analyzeEmoji:function(cont){//编译表情替换成图片展示出来
	              var pattern1 = /\[[\u4e00-\u9fa5]+\]/g;
	                var pattern2 = /\[[\u4e00-\u9fa5]+\]/;
	                var content = cont.match(pattern1);
	                var str = cont;
	                if(content){
	                    for(var i=0;i<content.length;i++){
	                        for(var j=0;j<this.OwOlist.length;j++){
	                            if("["+this.OwOlist[j].title +"]" == content[i]){
	                                var src = this.OwOlist[j].url;
	                                break;
	                            }
	                        }
	                        var s = require("../img/face/"+src)
	                        var imoj = "<img src='"+s+"'/>"

	                        str = str.replace(pattern2, imoj);
	                    }
	                }
	                return str;
	          },
	          showReply:function(name,index,commentId,userId){
				if(this.nowReply!=index){
					this.$set(this.isShowReply,this.nowReply,!this.isShowReply[this.nowReply])
					this.$set(this.isShowReply,index,!this.isShowReply[index])
					console.log(this.isShowReply[index]);
					this.nowReply = index;
				}
				this.nowCommentId = commentId;
				this.nowTargetUserId = userId;
				this.replyPlaceholder="@"+name;
				this.$forceUpdate()
			  },
			
  			pBodyStatus(index){
  				this.$set(this.pBodyMap,index,!this.pBodyMap[index])
			  },
			submitComment:function(){
				let param = {
					pid:this.$route.query.id,
					content:this.textareaMap[0],
					tableNameEnum:"VIDEO"
				};
				console.log(this.$route.query.id)
				console.log(param)
				this.$axios.post("http://116.196.105.203:6380/commentservice/comment?uid=1",param,{
                   headers: {
                    'Content-Type':'application/json;charset=UTF-8'
                        }
               })
				.then(res => {
					console.log(res)
					param.username="czj";
					param.createTime="刚刚"
					param.praiseNum=0
					this.commentList.unshift(param);
				})
				.catch(err => {
					console.error(err); 
				})
			},
			submitReply:function(index){
				let param = {
					cid:this.nowCommentId,
					ruid:this.nowTargetUserId,
					content:this.textareaMap[index],
					tableNameEnum:"VIDEO"
				};
				this.$axios.post("http://116.196.105.203:6380/commentservice/reply?uid=1",param,{
                   headers: {
                    'Content-Type':'application/json;charset=UTF-8'
                    }
               })
				.then(res => {
					console.log(res)
					param.username="czj";
					param.createTime="刚刚"
					param.praiseNum=0
					this.commentList[index].replyList.unshift(param);
				})
				.catch(err => {
					console.error(err); 
				})
			}
	         
        },
        watch: {
           // 如果路由有变化，会再次执行该方法
           // '$route':'routeChange'
         },
        created() { //生命周期函数
           
        }

	}
</script>


<style type="text/css" scoped>
	.comment{
		display: inline-block;
		vertical-align:top;
	}
	.comment-avatar{
		display: inline-block;
		vertical-align:top;
	}
	.emoj{
		/*width: 560px;*/
	}
	.publish{
		margin-top: 10px;
		display: inline-block;
		vertical-align:top;	
	}
	.publish-btn{
		float: right;
	}
	.btn{
	width: 70px; /* 宽度 */
	margin-top: 3px;
	height: 30px; /* 高度 */
	border-width: 0px; /* 边框宽度 */
	border-radius: 3px; /* 边框半径 */
	background: #3CB371; /* 背景颜色 */
	cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
	outline: none; /* 不显示轮廓线 */
	font-family: Microsoft YaHei; /* 设置字体 */
	color: white; /* 字体颜色 */
	font-size: 13px; /* 字体大小 */
	text-align: center;
	line-height: 30px;
	border-radius:5px;
	display: inline-block;
	margin-left: 5px;
	margin-right: 5px;
	}
	.btn-cancel{
		background:grey; /* 背景颜色 */
	}

	.tmsgBox{
    position: relative;
    background: #fff;
    padding:15px;
    margin-bottom: 20px;
    border-radius: 5px;
}
.tmsg-respond h3{
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
}
.tmsg-respond h3 small{
    font-size: smaller;
    cursor: pointer;
}
.tmsg-respond textarea{
    background:#f4f6f7;
    height:100px;
    margin-bottom: 10px;
}

.OwO{
    position: relative;
    z-index: 1;
}
.OwO .OwO-logo{
    position: relative;
    border-radius: 4px;
    color:#444;
    display: inline-block;
    background: #fff;
    border:1px solid #ddd;
    font-size: 13px;
    padding:0 6px;
    cursor: pointer;
    height:30px;
    box-sizing: border-box;
    z-index: 2;
    line-height: 30px;
}
.OwO .OwO-logo:hover{
    animation:a 5s infinite ease-in-out;
    -webkit-animation:a 5s infinite ease-in-out;
}
.OwO .OwO-body{
    position: absolute;
    background: #fff;
    border:1px solid #ddd;
    z-index: 1;
    top:29px;
    border-radius: 0 4px 4px 4px;
    display: none;
}
.OwO-open .OwO-body{
    display: block;
}
.OwO-open .OwO-logo{
    border-radius: 4px 4px 0 0;
    border-bottom: none;
}
.OwO-open .OwO-logo:hover{
    animation:none;
    -webkit-animation:none;
}
.OwO .OwO-items {
    max-height: 197px;
    overflow: scroll;
    font-size: 0;
    padding:10px;
    z-index: 1
}
.OwO .OwO-items .OwO-item{
    background: #f7f7f7;
    padding:5px 10px;
    border-radius: 5px;
    display: inline-block;
    margin: 0 10px 12px 0;
    transition: 0.3s;
    line-height: 19px;
    font-size: 20px;
    cursor: pointer;
}
.OwO .OwO-items .OwO-item:hover{
    background: #eee;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),
                0 3px 1px -2px rgba(0,0,0,.2),
                0 1px 5px 0 rgba(0,0,0,.12);
    animation:a 5s infinite ease-in-out;
    -webkit-animation:a 5s infinite ease-in-out;
}
.OwO .OwO-body .OwO-bar{
    width:100%;
    height:30px;
    border-top: 1px solid #ddd;
    background: #fff;
    border-radius: 0 0 4px 4px;
    color: #444;
}
.OwO .OwO-body .OwO-bar .OwO-packages li{
    display: inline-block;
    line-height: 30px;
    font-size: 14px;
    padding: 0 10px;
    cursor: pointer;
    margin-right: 3px;
    text-align: center;
}
.OwO .OwO-body .OwO-bar .OwO-packages li:first-of-type{
    border-radius: 0 0 0 3px;
}
@-webkit-keyframes a{
    2%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}
    4%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}
    6%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}
    8%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}
    10%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}
    12%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}
    14%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}
    16%{-webkit-transform:translateY(-.5px) rotate(-1.5deg);transform:translateY(-.5px) rotate(-1.5deg)}
    18%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}
    20%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}
    22%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}
    24%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}
    26%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}
    28%{-webkit-transform:translateY(.5px) rotate(1.5deg);transform:translateY(.5px) rotate(1.5deg)}
    30%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}
    32%,34%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}
    36%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}
    38%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}
    40%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}
    42%{-webkit-transform:translateY(2.5px) rotate(-1.5deg);transform:translateY(2.5px) rotate(-1.5deg)}
    44%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}
    46%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}
    48%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}
    50%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}
    52%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}
    54%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}
    56%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}
    58%{-webkit-transform:translateY(.5px) rotate(2.5deg);transform:translateY(.5px) rotate(2.5deg)}
    60%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}
    62%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}
    64%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}
    66%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}
    68%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}
    70%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}
    72%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}
    74%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}
    76%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}
    78%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}
    80%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}
    82%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}
    84%{-webkit-transform:translateY(1.5px) rotate(2.5deg);transform:translateY(1.5px) rotate(2.5deg)}
    86%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}
    88%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}
    90%{-webkit-transform:translateY(2.5px) rotate(-.5deg);transform:translateY(2.5px) rotate(-.5deg)}
    92%{-webkit-transform:translateY(.5px) rotate(-.5deg);transform:translateY(.5px) rotate(-.5deg)}
    94%{-webkit-transform:translateY(2.5px) rotate(.5deg);transform:translateY(2.5px) rotate(.5deg)}
    96%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}
    98%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}
    0%,to{-webkit-transform:translate(0) rotate(0deg);transform:translate(0) rotate(0deg)}
}
@keyframes a{
    2%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}
    4%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}
    6%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}
    8%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}
    10%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}
    12%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}
    14%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}
    16%{-webkit-transform:translateY(-.5px) rotate(-1.5deg);transform:translateY(-.5px) rotate(-1.5deg)}
    18%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}
    20%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}
    22%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}
    24%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}
    26%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}
    28%{-webkit-transform:translateY(.5px) rotate(1.5deg);transform:translateY(.5px) rotate(1.5deg)}
    30%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}
    32%,34%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}
    36%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}
    38%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}
    40%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}
    42%{-webkit-transform:translateY(2.5px) rotate(-1.5deg);transform:translateY(2.5px) rotate(-1.5deg)}
    44%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}
    46%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}
    48%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}
    50%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}
    52%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}
    54%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}
    56%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}
    58%{-webkit-transform:translateY(.5px) rotate(2.5deg);transform:translateY(.5px) rotate(2.5deg)}
    60%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}
    62%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}
    64%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}
    66%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}
    68%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}
    70%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}
    72%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}
    74%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}
    76%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}
    78%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}
    80%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}
    82%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}
    84%{-webkit-transform:translateY(1.5px) rotate(2.5deg);transform:translateY(1.5px) rotate(2.5deg)}
    86%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}
    88%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}
    90%{-webkit-transform:translateY(2.5px) rotate(-.5deg);transform:translateY(2.5px) rotate(-.5deg)}
    92%{-webkit-transform:translateY(.5px) rotate(-.5deg);transform:translateY(.5px) rotate(-.5deg)}
    94%{-webkit-transform:translateY(2.5px) rotate(.5deg);transform:translateY(2.5px) rotate(.5deg)}
    96%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}
    98%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}
    0%,to{-webkit-transform:translate(0) rotate(0deg);transform:translate(0) rotate(0deg)}
}
/*用户输入表单*/
.tmsg-r-info{
    margin:10px 0;
}
.tmsg-r-info input{
    height:30px;
    border-radius: 4px;
    background: #f4f6f7;
}
.tmsg-r-info .info-submit{
    margin: 10px 0;
    text-align: center;
}
.tmsg-r-info .info-submit p,.tmsg-commentshow h1{
    /*background: #97dffd;*/
    color:#fff;
    border-radius: 5px;
    cursor: pointer;
    /*transition: all .3s ease-in-out;*/
    height:30px;
    line-height: 30px;
    text-align: center;
}
/*.tmsg-r-info .info-submit p:hover{
    background: #47456d;
}*/
/*评论列表*/
.tmsg-comments .tmsg-comments-tip{
    display: block;
    border-left: 2px solid #363d4c;
    padding: 0 10px;
    margin: 40px 0;
    font-size: 20px;
}
.tmsg-commentlist {
    margin-bottom:20px;

}
.tmsg-commentshow>.tmsg-commentlist{
    border-bottom: 1px solid #e5eaed;
}
.tmsg-c-item{
    border-top: 1px solid #e5eaed;
}
.tmsg-c-item article{
    margin:20px 0;
}
.tmsg-c-item article header{
    margin-bottom:10px;
}
.tmsg-c-item article header img{
    width: 65px;
    height: 65px;
    border-radius: 50%;
    float: left;
    transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    margin-right: 15px;
    object-fit: cover;
}
.tmsg-c-item article header img:hover{
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
}
.tmsg-c-item article header .i-name{
    font-size: 14px;
    margin:5px 8px 7px 0;
    color:#444;
    font-weight: bold;
    display: inline-block;
}
.tmsg-c-item article header .i-class{
    display: inline-block;
    margin-left:10px;
    background: #dff0d8;
    color:#3c763d;
    border-radius: 5px;
    padding: 3px 6px;
    font-size: 12px;
    font-weight: 400;
}
.tmsg-c-item article header .i-time{
    color:#aaa;
    font-size: 12px;
}
.tmsg-c-item article section{
    margin-left: 80px;
}
.tmsg-c-item article section p img{
    vertical-align: middle;
}
.tmsg-c-item article section .tmsg-replay{
    margin:10px 0;
    font-size: 12px;
    color:#64609E;
    cursor: pointer;
}
.hbl-owo{
	text-align: left;
}
.comm{
		
	}
	.su{
		margin-top: 2px;
		width: 5px;
		height: 23px;
		background:#3CB371; 	/*#1E90FF*/
	}
	.com-rep{
		display: inline-block;
		vertical-align:top;	
	}
	.com-title{
		font-size: 20px;
		margin-left: 5px;
	}
	.com-span{
		font-size: 16px;
	}
	.hbl-fa{
		text-align: left;
	}
	.hbl-comm{
		padding-top: 20px;
		padding-bottom: 20px;
	}

	.reply{
		border-top: solid 1px #D9D9D9;
	}
	.content{
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.comment-f{
		display: inline-block;
		vertical-align: top;
	}
	.nickname{
		font-size: 14px;
	}
	.author{
		display: inline-block;
	}
	.icon{
		background: #dff0d8;
		color: #3c763d;
		border-radius: 5px;
		padding: 3px 6px;
		font-size: 12px;
		font-weight: 400px;
	}
	.date{
		font-size: 12px;
		margin-top: 5px;
		color: grey;
	}

	.comment-content{
		word-wrap : break-word;
		font-size: 15px;
		line-height: 25px;
		margin-left: 56px;
	}
	.reply-content{
		word-wrap : break-word;
		font-size: 15px;
		line-height: 25px;
		margin-left: 10px;
	}

	.reply-fa{
		margin-top: 5px;
	}
	.reply-font{
		margin-bottom: 5px;
		color: grey;
		cursor: pointer;
	}
	.children{
		padding-left: 40px;
	}
	.cc{
		display: inline-block;
	}
	.cc-to a{
		text-decoration:none; 
		color: #409eff;
	}
	.icon-reply{
		display: inline-block;
		vertical-align: top;

	}

	.icon-hf{
		margin-top: 2px;
	}
	.hbl-child{
		padding-top: 20px;
	}

	.date{
		display: inline-block;
		margin-right: 20px;
	}

	.info{
		color: #99a2aa;
		line-height: 26px;
		font-size: 12px;
		margin-left: 56px;
	}

	.reply-info{
		color: #99a2aa;
		line-height: 26px;
		font-size: 12px;
	}

	.like{
		
		cursor: pointer;
		margin-right: 20px;
	}

	.hate{
			margin-right: 20px;
	}

	.small-icon{
		width: 14px;
		height: 14px;
	}

	.lv-icon{
		margin-left: 5px;
		width:19px;
		height: 9px;
	}

	.replyButton{
		padding: 0 5px;
		border-radius: 4px;
		margin-right: 15px;
		cursor: pointer;
		display: inline-block;
	}

	.replyButton:hover{
		background: #1890ff;
    	color: #fff;
	}


	.comment-submit{
		width: 70px;
		height: 64px;
		float: right;
		top: 0;
		padding: 4px 15px;
		font-size: 14px;
		color: #fff;
		border-radius: 4px;
		text-align: center;
		min-width: 60px;
		vertical-align: top;
		cursor: pointer;
		background-color: #00a1d6;
		border: 1px solid #00a1d6;
		transition: .1s;
		user-select: none;
		outline: none;
	}

	.comment-submit:hover{
		background-color: #00b5e5;
    	border-color: #00b5e5;
	}

	.reply-textarea{
		margin-left:50px
	}
</style>