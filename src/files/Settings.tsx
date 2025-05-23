import { fileUtils } from '#/utils/directory';

function Settings() {
  return (
    <div>
      <h1>Settings</h1>
    </div>
  );
}

export default fileUtils.create('Settings', Settings, {
  visible: false,
});
