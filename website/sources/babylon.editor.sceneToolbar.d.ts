declare module BABYLON.EDITOR {
    class SceneToolbar implements IEventReceiver {
        container: string;
        toolbar: GUI.GUIToolbar;
        panel: GUI.IGUIPanel;
        private _core;
        private _editor;
        private _fpsInput;
        private _wireframeID;
        private _boundingBoxID;
        private _centerOnObjectID;
        private _renderHelpersID;
        private _renderDebugLayerID;
        private _drawingDebugLayer;
        /**
        * Constructor
        * @param core: the editor core instance
        */
        constructor(core: EditorCore);
        onPreUpdate(): void;
        onPostUpdate(): void;
        onEvent(event: Event): boolean;
        createUI(): void;
        setFocusOnObject(object: any): void;
        setFramesPerSecond(fps: number): void;
        private _configureDebugLayer();
        private _configureFramesPerSecond();
    }
}
