import "./ProfileInfo.css"
const user = {
        name: `Luz Bright Svendsen`,
        imageUrl: `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29d1de1c-c3e4-41fb-ba65-6e72166a6236/deleguj-b7c268a3-1625-4469-8c4c-e83a1ec1a791.png/v1/fill/w_894,h_894,q_70,strp/luz_noceda_icon_by_mel2003_deleguj-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzI5ZDFkZTFjLWMzZTQtNDFmYi1iYTY1LTZlNzIxNjZhNjIzNlwvZGVsZWd1ai1iN2MyNjhhMy0xNjI1LTQ0NjktOGM0Yy1lODNhMWVjMWE3OTEucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.GojzFTCgFGiaREqsBMvrY2BsZWEynRfCWyDNcFBiVEo`,
        imageSize: 90, 
}; 



export default function ProfileInfo() {




return (


    <>
        <h1>{user.name}</h1>
        <img
            className="avatar"
            src={user.imageUrl}
            alt={`Photo of ` + user.name}
            style={{
                width: user.imageSize,
                height: user.imageSize
            }}
           />
    </>
      );
    }




