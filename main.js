var Youtube = /** @class */ (function () {
    function Youtube(videoId, videoTitle, videoDescription, videoChannelId, videoPublishedAt, videoPublishedBy, videoThumbnails, videoCategory, videocategoryId, videoViewCount, videoLikeCount, videoDislikeCount, videofavoriteCount, videoCommentCount, videoSubscribersCount, videoComments, videoDownload, videoSubscription, videoChannelBanner) {
        var _this = this;
        this.getVideoUrl = function () {
            console.log("get the url ");
        };
        this.getRelatedVideos = function () {
            console.log("getrelated videos implementation");
        };
        this.getNumberOfViews = function () {
            console.log(_this.videoViewCount + "is the number of views");
        };
        this.download = function () {
            if (_this.videoDownload == false) {
                console.log("The video is not available for download");
            }
            else {
                console.log("video downloaded");
            }
        };
        this.getNumberOfLikes = function () {
            console.log(_this.videoLikeCount + "is the number of likes");
        };
        this.getNumberOfDisLikes = function () {
            console.log(_this.videoDislikeCount + "is the dislikes");
        };
        this.getFavouriteCount = function () {
            console.log(_this.videofavoriteCount + " is the favourite count");
        };
        this.videoWatched = function () {
            _this.videoViewCount = _this.videoViewCount + 1;
        };
        this.addComment = function () {
            var arr = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                arr[_i] = arguments[_i];
            }
            for (var _a = 0, arr_1 = arr; _a < arr_1.length; _a++) {
                var comment = arr_1[_a];
                _this.videoComments.push(comment);
            }
        };
        this.removeRecentComment = function () {
            console.log(_this.videoComments.pop() + " has been removed");
        };
        this.videoPublishDetails = function () {
            console.log("video is by publishedby" + _this.videoPublishedBy + " at" + _this.videoPublishedAt);
        };
        this.subscribeVideo = function () {
            _this.videoSubscription = true;
            console.log("you have subscribed the channel successfully");
        };
        this.unsubscribe = function () {
            _this.videoSubscription = false;
            console.log("you have unsubscribed the channel successfully");
        };
        this.showComments = function () {
            console.log("comments start here");
            for (var _i = 0, _a = _this.videoComments; _i < _a.length; _i++) {
                var com = _a[_i];
                console.log(com);
            }
            console.log("comments end here");
        };
        this.videoId = videoId;
        this.videoTitle = videoTitle;
        this.videoDescription = videoDescription;
        this.videoChannelId = videoChannelId;
        this.videoPublishedAt = videoPublishedAt;
        this.videoPublishedBy = videoPublishedBy;
        this.videoThumbnails = videoThumbnails;
        this.videoCategory = videoCategory;
        this.videocategoryId = videocategoryId;
        this.videoViewCount = videoViewCount;
        this.videoLikeCount = videoLikeCount;
        this.videoDislikeCount = videoDislikeCount;
        this.videofavoriteCount = videofavoriteCount;
        this.videoCommentCount = videoCommentCount;
        this.videoSubscribersCount = videoSubscribersCount;
        this.videoComments = videoComments;
        this.videoDownload = videoDownload;
        this.videoSubscription = videoSubscription;
        this.videoChannelBanner = videoChannelBanner;
    }
    return Youtube;
}());
var myvedio1 = new Youtube("71CDEYXw3mM", "mera company", "this video all about how i created the company", "UC_x5XG10V2P6uZZ5FSM9Ttw", "10 AM MARCH 7 2017", "NIKHIL", "something.png", "INFORMATION", 25, 2000, 200, 1, 89, 3, 800, ["good", "very good", "excellent"], true, true, "some.png");
myvedio1.unsubscribe();
myvedio1.subscribeVideo();
myvedio1.videoPublishDetails();
myvedio1.addComment("cool", "nice", "fabulous");
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
