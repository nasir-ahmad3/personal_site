import { useFirebase } from '../../hooks/UseFirebse';

export default function Feedback() {
  const { data: feedback } = useFirebase('feedback');

  return (
    <section className="customer-feedback container">
      <h1 className="title gradient-text">clients feedback</h1>
      <div className="box-wrapper">
        {feedback && (
          feedback.map((feed, index) => (
            <div className="box" key={index}>
              <div className="img" style={{ backgroundImage: `url(${feed.image})` }}></div>
              <p className="title">{feed.name}</p>
              <span className="comma">
              <svg width="30px" height="30px" viewBox="0 0 980.000000 818.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,818.000000) scale(0.100000,-0.100000)" stroke="none">
                    <path d="M3394 8081 c-1163 -581 -2160 -1563 -2753 -2713 -350 -677 -551 -1371 -623 -2143 -17 -184 -17 -697 0 -840 75 -634 277 -1146 621 -1572 86 -108 282 -302 376 -374 397 -305 864 -457 1337 -436 448 21 819 145 1136 381 376 280 626 694 719 1191 20 110 28 405 14 534 -72 663 -430 1193 -983 1456 -274 129 -541 183 -863 172 -281 -9 -526 -74 -689 -183 -31 -20 -59 -35 -61 -32 -3 3 -1 70 5 149 50 712 382 1459 948 2134 104 123 453 472 585 584 274 231 581 440 900 613 73 39 133 72 135 74 3 2 -591 1086 -603 1101 -1 2 -91 -42 -201 -96z"/>
                    <path d="M8935 8067 c-255 -131 -378 -202 -595 -345 -1378 -904 -2351 -2283 -2675 -3789 -89 -411 -119 -698 -120 -1133 0 -354 7 -444 57 -699 112 -583 368 -1083 747 -1461 339 -338 721 -539 1176 -617 140 -24 477 -24 635 1 300 45 573 146 798 292 579 377 903 1069 832 1775 -35 341 -154 669 -338 929 -86 122 -270 306 -392 392 -320 227 -724 341 -1155 325 -278 -11 -502 -75 -669 -194 l-49 -35 7 123 c66 1195 938 2471 2218 3246 84 51 199 116 255 145 57 29 102 56 100 59 -1 3 -137 249 -301 547 -202 365 -305 542 -315 542 -9 0 -106 -47 -216 -103z"/>
                    </g>
                </svg>
              </span>
              <div className="des">{feed.des}</div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
