import { Component, Event, EventEmitter, getAssetPath, h, Prop, State } from '@stencil/core';


@Component({
    tag: 'modal-component',
    styleUrl: 'modal-component.css',
    assetsDirs: ['assets']
})
export class ModalComponent {
    @Prop({
        mutable: true,
        reflect: true
    })
    @Prop() header: string;
    @Prop() appearance: string;
    @Prop() isopen: boolean;
    @Prop() closeIcon = 'icon.svg';
    @Prop() buttons: string;

    @State() _buttons: Array<any>;

    arrayDataWatcher(buttons) {
        if(typeof buttons === 'string') {
            this._buttons = JSON.parse(buttons);
        } else {
            this._buttons = buttons;
        }
    }

    @Event() private action: EventEmitter;

    componentWillLoad() {
        this.arrayDataWatcher(this.buttons);
    }

    private handleClose = () => {
        this.isopen = false;
    }

    private handleAction = () => {
        this.action.emit()
    }

    render() {
        return (
            <div class={this.isopen ? 'modal-wrapper is-open' : 'modal-wrapper'}>
                <div class="modal-overlay" onClick={() => this.handleClose()} />
                <div class="modal">
                    <div class="header">
                        <h3>{this.header}</h3>
                        <div class="close" onClick={() => this.handleClose()}>
                            <img src={getAssetPath(`./assets/${this.closeIcon}`)} alt=""/>
                        </div>
                    </div>
                    <div class="body">
                        <slot/>
                    </div>
                    <div class="footer">
                        {this._buttons.map((button, index) => (
                            <button-component onClick={index === 0 ? this.handleAction : this.handleClose} text={button.text} appearance={index === 0 && this.appearance} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
