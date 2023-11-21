<template>
  <div :class="$style.subjects">
    <div :class="$style.displaySub">
      <div :class="$style.text">
        <img :class="$style.textChild" alt="" src="/rectangle-33@2x.png" />
        <div :class="$style.frameParent">
          <div :class="$style.frameGroup">
            <div :class="$style.unitreeGo1EduParent">
              <b :class="$style.unitreeGo1Edu">Unitree Go1 Edu</b>
              <div :class="$style.yearOfReleaseParent">
                <div :class="$style.unitreeGo1Edu">year of release:</div>
                <div :class="$style.unitreeGo1Edu">2021</div>
              </div>
            </div>
            <div :class="$style.frameContainer">
              <div :class="$style.robotWrapper">
                <div :class="$style.robot">Robot</div>
              </div>
              <div :class="$style.robotWrapper">
                <div :class="$style.robot">Legged</div>
              </div>
            </div>
            <div :class="$style.thisIsTheUnitreeGo1EduRoWrapper">
              <div :class="$style.thisIsThe">
                This is the Unitree Go1 Edu robot. It’s a relatively lightweight
                robot that can walk on all terrains as long as there aren’t too
                big gaps in it. Out-of-the-box it comes with a stair mode so it
                can take stairs. It also has some standard programmed dance
                moves and comes with two controllers. Both can be used for
                controlling the robot while the smaller one of them can also be
                used as a Bluetooth tag on which the robot can autonomously
                side-follow the person wearing it.
              </div>
            </div>
          </div>
          <div :class="$style.frameDiv">
            <div :class="$style.specificationsParent">
              <div :class="$style.usefulLinksWrapper">
                <b :class="$style.unitreeGo1Edu">Useful links</b>
              </div>
              <a
                :class="$style.httpswwwunitreecomproduc"
                href="https://www.unitree.com/products/go1"
                target="_blank"
                >https://www.unitree.com/products/go1</a
              >
            </div>
            <div :class="$style.frameParent2">
              <div :class="$style.frameWrapper">
                <div :class="$style.advantagesParent">
                  <b :class="$style.unitreeGo1Edu">Advantages</b>
                  <div :class="$style.thisIsTheUnitreeGo1EduRoWrapper">
                    <div :class="$style.thisIsThe">
                      <p :class="$style.lightweight">· Lightweight</p>
                      <p :class="$style.lightweight">· High dynamics</p>
                      <p :class="$style.lightweight">
                        · Relatively long endurance
                      </p>
                      <p :class="$style.lightweight">
                        · NVIDIA Jetson Nano’s inside that can be upgraded to
                        NVIDIA Jetson Xavier
                      </p>
                      <p :class="$style.lightweight">· LIDAR can be attached</p>
                    </div>
                  </div>
                </div>
              </div>
              <div :class="$style.advantagesParent">
                <b :class="$style.unitreeGo1Edu">Disadvantages</b>
                <div :class="$style.badDocumentationContainer">
                  <p :class="$style.lightweight">· Bad documentation</p>
                  <p :class="$style.lightweight">
                    · It can’t take all stairs (see specifications)
                  </p>
                  <p :class="$style.lightweight">
                    · Can’t walk out in the rain
                  </p>
                  <p :class="$style.lightweight">
                    · No charging station provided – battery taken out manually
                  </p>
                </div>
              </div>
            </div>
            <div :class="$style.specificationsParent">
              <b :class="$style.unitreeGo1Edu">Specifications</b>
              <div :class="$style.connectionsUsbHdmiPerNaWrapper">
                <div :class="$style.thisIsThe">
                  <p :class="$style.lightweight">
                    <b>Connections:</b>
                  </p>
                  <ul :class="$style.usbHdmiPerNanotxBoardR">
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      <span>USB & HDMI per nano/TX board</span>
                    </li>
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      <span>RJ45 Gigabit Ethernet port</span>
                    </li>
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      <span>24V 30A Power supply port type XT30 or XT30U</span>
                    </li>
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      <span>Coprocessor port USB-C</span>
                    </li>
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      <span>Main processor port USB-C</span>
                    </li>
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      <span>When active: 5G Hotspot</span>
                    </li>
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      <span>SIM Card</span>
                    </li>
                  </ul>
                  <p :class="$style.lightweight">
                    <b>&nbsp;</b>
                  </p>
                  <p :class="$style.lightweight">
                    <b>Weight:</b>
                  </p>
                  <ul :class="$style.usbHdmiPerNanotxBoardR">
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      <span>12 kg</span>
                    </li>
                  </ul>
                  <p :class="$style.lightweight">
                    <b>&nbsp;</b>
                  </p>
                  <p :class="$style.lightweight">
                    <b>Load</b>
                    <span>:</span>
                  </p>
                  <ul :class="$style.usbHdmiPerNanotxBoardR">
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      <span>≈5kg</span>
                    </li>
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      <span>limit ~ 10kg</span>
                    </li>
                  </ul>
                  <p :class="$style.lightweight">
                    <b>&nbsp;</b>
                  </p>
                  <p :class="$style.lightweight">
                    <b>Speed:</b>
                  </p>
                  <ul :class="$style.usbHdmiPerNanotxBoardR">
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      <span>0 ~ 3.7 m/s</span>
                    </li>
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      <span>limit ~ 5 m/s</span>
                    </li>
                  </ul>
                  <p :class="$style.lightweight">
                    <b>&nbsp;</b>
                  </p>
                  <p :class="$style.lightweight">
                    <b>Battery:</b>
                  </p>
                  <ul :class="$style.usbHdmiPerNanotxBoardR">
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      <span>Standard version (Typical value):</span>
                    </li>
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      <span>6000 mAh</span>
                    </li>
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      <span>133.2 Wh</span>
                    </li>
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      <span>Long Endurance version (Typical value):</span>
                    </li>
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      <span>9000 mAh</span>
                    </li>
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      <span>199.8 Wh</span>
                    </li>
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      <span>Battery we have</span>
                    </li>
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      <span>4500 mAh</span>
                    </li>
                  </ul>
                  <p :class="$style.lightweight">
                    <b>&nbsp;</b>
                  </p>
                  <p :class="$style.lightweight">
                    <b>Sensors:</b>
                  </p>
                  <ul :class="$style.usbHdmiPerNanotxBoardR">
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      <span
                        >Stereo Depth Camera on front, sides, bottom of head and
                        body</span
                      >
                    </li>
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      <span>Ultrasonic sensors on front and sides</span>
                    </li>
                    <li>
                      <span>Force sensors on all feet</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div :class="$style.specificationsParent">
              <b :class="$style.unitreeGo1Edu">Cost</b>
              <div :class="$style.basicVersion8000WithWrapper">
                <div :class="$style.thisIsThe">
                  <ul :class="$style.usbHdmiPerNanotxBoardR">
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      Basic version: +/- 8000$
                    </li>
                    <li :class="$style.usbHdmiPerNanotxBoard">
                      With NX: + 1800$
                    </li>
                    <li>With 2D LIDAR: + 1800$</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Subjects",
  });
</script>
<style module>
  .textChild {
    align-self: stretch;
    flex: 1;
    position: relative;
    border-radius: var(--br-5xs);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .unitreeGo1Edu {
    position: relative;
    line-height: 1.5rem;
  }
  .yearOfReleaseParent {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    font-size: var(--body-regular-size);
    color: var(--color-gray-300);
  }
  .unitreeGo1EduParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .robot {
    position: relative;
    line-height: 1.63rem;
    font-weight: 500;
  }
  .robotWrapper {
    border-radius: var(--br-13xl);
    background-color: var(--color-darkgray);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: var(--padding-9xs) var(--padding-base);
  }
  .frameContainer {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: var(--gap-5xs);
    text-align: center;
    font-size: var(--body-regular-size);
    color: var(--neutral-1);
  }
  .thisIsThe {
    align-self: stretch;
    position: relative;
  }
  .thisIsTheUnitreeGo1EduRoWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: var(--font-size-base);
  }
  .frameGroup {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .usefulLinksWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .httpswwwunitreecomproduc {
    position: relative;
    font-size: var(--font-size-base);
    text-decoration: underline;
    line-height: 1.5rem;
    color: inherit;
  }
  .lightweight {
    margin: 0;
  }
  .advantagesParent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
  }
  .frameWrapper {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .badDocumentationContainer {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-base);
  }
  .frameParent2 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .usbHdmiPerNanotxBoard {
    margin-bottom: false;
  }
  .usbHdmiPerNanotxBoardR {
    margin: 0;
    padding-left: var(--padding-2xl);
  }
  .connectionsUsbHdmiPerNaWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: var(--font-inherit);
  }
  .specificationsParent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
  }
  .basicVersion8000WithWrapper {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: var(--font-inherit);
    font-family: var(--font-inherit);
  }
  .frameDiv {
    align-self: stretch;
    height: 17.88rem;
    overflow-y: auto;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-13xl);
    font-size: var(--font-size-xl);
  }
  .frameParent {
    flex: 1;
    height: 34.38rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0rem var(--padding-base) var(--padding-base);
    box-sizing: border-box;
    gap: var(--gap-13xl);
  }
  .text {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .displaySub {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .subjects {
    align-self: stretch;
    height: 34.31rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: left;
    font-size: var(--font-size-13xl);
    color: var(--color-black);
    font-family: var(--font-barlow);
  }
</style>
