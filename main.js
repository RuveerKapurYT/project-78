
var images=[
       "https://i.postimg.cc/MKdhy06Z/family.jpg" ,    
    "http://photogallery.indiatimes.com/events/delhi/quirky-art-projects/photo/18346942/Quirky-art-projects.jpg",
            "https://yt3.ggpht.com/ytc/AAUvwniKe-SLqHUp9Rw-KWL2vUB-D7A_sjQZJA8M0iDY=s176-c-k-c0x00ffffff-no-rj",
    "https://tse2.mm.bing.net/th?id=OIP.qJB-bKWAORneewQTxqrbAQAAAA&pid=Api&P=0&w=300&h=300"
];
var names=["family book","Disha Kapur","Ruveer Kapur", "Girish Kapur"];
var i=0;
function update()
{
    i++;
    var numbers_of_family_member_in_array=3;
    if(i > numbers_of_family_member_in_array )
    {
        i=0;
    }
    var updatedImage= images[i];
    var updatedName= names[i];
    document.getElementById("family_member_image").src= updatedImage;
    document.getElementById("family_member_name").innerHTML=updatedName;
}