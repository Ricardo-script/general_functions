type InputEvent = React.ChangeEvent<HTMLInputElement>;
type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

update = (e: InputEvent): void => this.props.login[e.target.name] = e.target.value;
submit = (e:  ButtonEvent): void => {
    this.props.login.logIn();
    e.preventDefault();
}