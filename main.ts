class Youtube{
    videoId :string;
    videoTitle :string;
    videoDescription :string;
    videoChannelId:string;
    videoPublishedAt:string;
    videoPublishedBy:string;
    videoThumbnails:string;
    videoCategory:string;
    videocategoryId:number;
    videoViewCount:number;
    videoLikeCount:number;
    videoDislikeCount:number;
    videofavoriteCount:number;
    videoCommentCount:number;
    videoSubscribersCount:number;
    videoComments:string[];
    videoDownload:boolean;
    videoSubscription:boolean;
    videoChannelBanner:string;
    
    constructor(videoId :string,videoTitle :string,videoDescription :string,videoChannelId:string,videoPublishedAt:string,videoPublishedBy:string,videoThumbnails:string,videoCategory:string,videocategoryId:number,videoViewCount:number, videoLikeCount:number,videoDislikeCount:number,
        videofavoriteCount:number,
        videoCommentCount:number,
        videoSubscribersCount:number,
        videoComments:string[],
        videoDownload:boolean,
        videoSubscription:boolean,
        videoChannelBanner:string){

        this.videoId= videoId;
        this.videoTitle=videoTitle;
        this.videoDescription=videoDescription;
        this.videoChannelId=videoChannelId;
        this.videoPublishedAt=videoPublishedAt;
        this.videoPublishedBy=videoPublishedBy;
        this.videoThumbnails=videoThumbnails;
        this.videoCategory=videoCategory
        this.videocategoryId=videocategoryId
        this.videoViewCount=videoViewCount
        this.videoLikeCount=videoLikeCount
        this.videoDislikeCount=videoDislikeCount
        this.videofavoriteCount=videofavoriteCount
        this.videoCommentCount=videoCommentCount
        this.videoSubscribersCount=videoSubscribersCount
        this.videoComments=videoComments
        this.videoDownload=videoDownload
        this.videoSubscription=videoSubscription
        this.videoChannelBanner=videoChannelBanner

    }

    getVideoUrl=()=>{
       console.log("get the url ");
    }
    getRelatedVideos=()=>{
       console.log("getrelated videos implementation");
    }
    getNumberOfViews=()=>{
        console.log(this.videoViewCount+"is the number of views");
    }
    download=()=>{
        if(this.videoDownload==false){
            console.log("The video is not available for download");
        }
        else{
            console.log("video downloaded");
        }
    }
    
    getNumberOfLikes=()=>{
        console.log(this.videoLikeCount+"is the number of likes");
    }
    getNumberOfDisLikes=()=>{
        console.log(this.videoDislikeCount+"is the dislikes");
    } 
    getFavouriteCount=()=>{
        console.log(this.videofavoriteCount+" is the favourite count");
    }   
    videoWatched=()=>{
        this.videoViewCount=this.videoViewCount+1;
    }
    addComment=(...arr:string[])=>{
        
        for(let comment of arr){
           this.videoComments.push(comment);
        }

    }
    removeRecentComment=()=>{
       console.log(this.videoComments.pop()+" has been removed");
    }
    videoPublishDetails=()=>{
        console.log("video is by publishedby"+this.videoPublishedBy+" at"+this.videoPublishedAt);
    }
    subscribeVideo=()=>{
       this.videoSubscription=true;
       console.log("you have subscribed the channel successfully");
    }
    unsubscribe=()=>{
        this.videoSubscription=false;
       console.log("you have unsubscribed the channel successfully");       
    }
    showComments=()=>{
        console.log("comments start here");
        for(let com of this.videoComments){
            console.log(com);
        }
        console.log("comments end here");
    }
} 



let myvedio1=new Youtube("71CDEYXw3mM","mera company","this video all about how i created the company","UC_x5XG10V2P6uZZ5FSM9Ttw","10 AM MARCH 7 2017","NIKHIL","something.png","INFORMATION",25,2000,200,1,89,3,800,["good","very good","excellent"],true,true,"some.png");


myvedio1.unsubscribe();
myvedio1.subscribeVideo();
myvedio1.videoPublishDetails();
myvedio1.addComment("cool","nice","fabulous");
myvedio1.removeRecentComment();
myvedio1.showComments();
myvedio1.videoWatched();
myvedio1.getFavouriteCount();
myvedio1.getNumberOfDisLikes();
myvedio1.getNumberOfLikes();
myvedio1.getNumberOfViews();
myvedio1.getRelatedVideos();
myvedio1.getVideoUrl();
myvedio1.download();

