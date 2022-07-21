import * as BABYLON from 'babylonjs';

export const start = async (canvas: HTMLCanvasElement) => {

  const engine = new BABYLON.Engine(canvas, true);
  const createScene = async () => {
    console.log(await BABYLON.WebXRSessionManager.IsSessionSupportedAsync('immersive-vr'));
    const scene = new BABYLON.Scene(engine);
    const camera = new BABYLON.DeviceOrientationCamera('DevOr_camera', new BABYLON.Vector3(-30, -30, -30), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);
    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "box.babylon");

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);
    light.intensity = 0.7;

    await scene.createDefaultXRExperienceAsync();

    return scene;
  };

  const scene = await createScene();

  engine.runRenderLoop(() => {
    scene.render();
  });

  window.addEventListener('resize', () => {
    engine.resize();
  });
};

