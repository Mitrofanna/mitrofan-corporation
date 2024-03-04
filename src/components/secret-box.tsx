import "../styles/secret.css";

function SecretBox(props: any): JSX.Element {
    props = 208;

    function onMouseBox(event: any) {
        let box = event.target;
        let randomColor = Math.random() * 360;

        box.classList.add('secret__box-active');
        box.style.filter = 'hue-rotate('+randomColor+'deg)';
    }

    return (
        <article className="promo__block secret">
            <h3 className="secret__title">Хорошего дня!</h3>
            <div className="secret__container">
                {Array(props).fill(<div className="secret__box"></div>).map((_, i) => 
                <div className="secret__box" 
                key={i}
                onMouseOver={onMouseBox}>
                </div>)}
            </div>
        </article>
    );
}

export default SecretBox;