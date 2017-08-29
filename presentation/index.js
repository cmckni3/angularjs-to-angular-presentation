// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Notes,
  Quote,
  S,
  Slide,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";
import Terminal from "spectacle-terminal";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../themes/formidable/index.css");
// Best way to include fonts rite
require("../fonts/worksans.css");
require("../fonts/biorhyme.css");
require("../fonts/silkscreen.css");

const images = {
  speakerImage: require("../assets/me.jpg"),
  disclaimer: require("../assets/disclaimer.jpg"),
  yoDawg: require("../assets/yo-dawg.jpg"),
  rightGif: require("../assets/right.gif")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {

    return (
      <Deck
        progress="none"
        theme={theme}
        transition={["fade"]}
        transitionDuration={500}
      >
        <Slide transition={["zoom"]}>
          <Notes>
            <Link href="https://angular-2-training-book.rangle.io/handout/migrate/ng-metadata/">
              Rangle.io Angular Training migration
            </Link>
          </Notes>
          <Heading size={1} lineHeight={1} fit>
            AngularJS ⇒ Angular
          </Heading>
          <Text textFont="monospace" margin="auto auto 5em auto">
            August 29, 2017
          </Text>
          <Text textFont="monospace">
            By Chris McKnight
          </Text>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading size={1} lineHeight={1} caps>
            About Me
          </Heading>
          <Layout>
            <Fill>
              <Image width="50%" src={images.speakerImage} />
            </Fill>
            <Fill>
              <List>
                <ListItem>
                  Graduated from LSU in Computer Science with a concentration in Mathematics
                </ListItem>
                <ListItem>
                  Background in C++, PHP, and JavaScript
                </ListItem>
              </List>
            </Fill>
          </Layout>
          <Notes>
            <Text>
              Currently, I am a software developer at Franklin American Mortgage.
              I started building PHP applications at 16 years old. I transitioned to writing
              JavaScript-heavy applications in 2009 using "Web 2.0" technologies, such as,
              AJAX.
            </Text>
          </Notes>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading size={1} lineHeight={1} caps>
            Disclaimer
          </Heading>
          <Layout>
            <Fill>
              <Image src={images.disclaimer} />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading size={1} lineHeight={1} caps>
            Upgrade Options
          </Heading>
          <List>
            <ListItem>Total Conversion</ListItem>
            <ListItem>Using <S type="italic">ng-metadata</S></ListItem>
            <ListItem>Using <S type="italic">ng-upgrade</S></ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading size={1} lineHeight={1} caps>
            Prerequisites
          </Heading>
          <List ordered>
            <ListItem>Upgrade to AngularJS 1.3+ style</ListItem>
            <ListItem>Ideally upgrade to AngularJS 1.5+ style</ListItem>
            <ListItem>Upgrade to a module bundler e.g. Webpack (Recommended)</ListItem>
            <ListItem>Upgrade to TypeScript (Recommended)</ListItem>
          </List>
          <Notes>
            <Text>
              AngularJS 1.3 started enforcing modules.
              AngularJS has pushed developers in the direction of better architecture, structure,
              and encapsulation.
              No more global controller functions on <S type="italic">window</S>.
            </Text>
            <Text>
              AngularJS 1.5 also helped transition to Angular patterns
              including one-way binding and components.
            </Text>
            <Text>
              Look at Todd Motto's excellent AngularJS style guide for best practices.
              https://github.com/toddmotto/angularjs-styleguide
            </Text>
          </Notes>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading size={1} lineHeight={1} caps>
            Prerequisites (Continued)
          </Heading>
          <List>
            <ListItem>Controllers should use <S type="italic">controllerAs</S></ListItem>
            <ListItem>Prefer component directives</ListItem>
          </List>
          <Text lineHeight={1.5}>
            Components should not use <S type="italic" bgColor="tertiary">compile</S>, <S type="italic" bgColor="tertiary">replace: true</S>,
            or <S type="italic" bgColor="tertiary">priority / terminal</S>.
          </Text>
          <Notes>
            <Text>
              Components should be organized as "one thing" per file and by feature.
            </Text>
            <Text>
              For more information about <S type="italic">controllerAs</S>, see
              this Todd Motto's post.
              https://toddmotto.com/digging-into-angulars-controller-as-syntax/
            </Text>
            <Text>
              Component Directive https://code.angularjs.org/1.5.11/docs/guide/component
            </Text>
          </Notes>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading size={1} lineHeight={1} fit caps>
            You have tests, right?
          </Heading>
          <Layout>
            <Fill>
              <Image src={images.rightGif} />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading size={1} lineHeight={1} fit caps>
            Total Conversion Upgrade Path
          </Heading>
          <Text>
            Create an Angular application and convert everything
          </Text>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading size={1} lineHeight={1} fit caps>
            Total Conversion Upgrade Path (continued)
          </Heading>
          <Layout>
            <Fill>
              <Heading size={3} lineHeight={1}>
                Advantages
              </Heading>
              <List>
                <ListItem>Minimal setup required (a la Angular CLI)</ListItem>
                <ListItem>Fresh application architecture</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading size={1} lineHeight={1} fit caps>
            Total Conversion Upgrade Path (continued)
          </Heading>
          <Layout>
            <Fill>
              <Heading size={3} lineHeight={1}>
                Disadvantages
              </Heading>
              <List>
                <ListItem>Lengthy process</ListItem>
                <ListItem>Prone to errors</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={[ "spin", "slide" ]}>
          <Heading size={1} caps fit>Angular CLI</Heading>
          <Terminal title="1. cmcknight@Christophers-MacBook-Pro: ~(zsh)" output={[
            "-> % ng --version",
            <div>
              <div>@angular/cli: 1.3.0</div>
              <div>node: 6.11.2</div>
              <div>os: darwin x64</div>
            </div>]}
          />
        </Slide>
        <Slide transition={[ "spin", "slide" ]}>
          <Heading size={1} caps fit>Angular CLI</Heading>
          <Terminal title="1. cmcknight@Christophers-MacBook-Pro: ~(zsh)" output={[
            "-> % ng new my-application",
            <div>
            <pre>
            installing ng<br />
              <span style={{ color: "green" }}>create</span> src/app/app.component.css<br />
              <span style={{ color: "green" }}>create</span> src/app/app.component.html<br />
              <span style={{ color: "green" }}>create</span> src/app/app.component.spec.ts<br />
              <span style={{ color: "green" }}>create</span> src/app/app.component.ts<br />
              <span style={{ color: "green" }}>create</span> src/app/app.module.ts<br />
              <span style={{ color: "green" }}>create</span> src/index.html<br />
              <span style={{ color: "green" }}>create</span> src/main.ts<br />
              <span style={{ color: "green" }}>create</span> src/polyfills.ts<br />
              <span style={{ color: "green" }}>create</span> src/tsconfig.app.json<br />
              <span style={{ color: "green" }}>create</span> src/tsconfig.spec.json<br />
              <span style={{ color: "green" }}>create</span> src/typings.d.ts<br />
              <span style={{ color: "green" }}>create</span> .angular-cli.json<br />
              <span style={{ color: "green" }}>create</span> package.json<br />
              <span style={{ color: "green" }}>create</span> tsconfig.json<br />
              <span style={{ color: "green" }}>create</span> tslint.json<br />
            <span style={{ color: "green" }}>Installing packages for tooling via yarn.</span><br />
            <span style={{ color: "green" }}>Installed packages for tooling via yarn.</span><br />
            <span style={{ color: "green" }}>Successfully initialized git.</span><br />
            <span style={{ color: "green" }}>Project 'my-application' successfully created.</span><br />
            </pre>
            </div>]}
          />
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading size={1} lineHeight={1} fit caps>
            ng-metadata Upgrade Path
          </Heading>
          <Text>
            <S type="italic">ng-metadata</S> uses AngularJS dependencies to use Angular
            style annotations/decorators.
          </Text>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading size={1} lineHeight={1} fit caps>
            ng-metadata Upgrade Path
          </Heading>
          <Layout>
            <Fill>
              <Heading size={3} lineHeight={1}>
                Advantages
              </Heading>
              <List>
                <ListItem>Migration over time</ListItem>
                <ListItem>
                  Smaller application size over <S type="italic">ng-upgrade</S> (third upgrade method)
                </ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading size={1} lineHeight={1} fit caps>
            ng-metadata Upgrade Path
          </Heading>
          <Layout>
            <Fill>
              <Heading size={3} lineHeight={1}>
                Disadvantages
              </Heading>
              <List>
                <ListItem>Requires large refactor of AngularJS code</ListItem>
                <ListItem>Possibly interopability issues</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw-loader!../assets/ng-metadata.ts")}
            ranges={[
              { loc: [0, 270], title: "ng-metadata code sample" },
              { loc: [0, 7], note: "AngularJS code" },
              { loc: [0, 23], note: "AngularJS directive/component" },
              { loc: [0, 49], note: "Bootstrap AngularJS in TypeScript!" },
              { loc: [0, 57], note: "AppModule" },
              { loc: [0, 64], note: "Import ng-metadata" },
              { loc: [0, 68], note: "Use AngularJS directive in Angular!" },
              { loc: [0, 94], note: "The Magic metadata!" }
            ]} />
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading size={1} lineHeight={1} fit caps>
            ng-upgrade Upgrade Path
          </Heading>
          <Text>
            <S type="italic">ng-upgrade</S> allows AngularJS code to run inside of
          </Text>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading size={1} lineHeight={1} fit caps>
            ng-metadata Upgrade Path
          </Heading>
          <Layout>
            <Fill>
              <Heading size={3} lineHeight={1}>
                Advantages
              </Heading>
              <List>
                <ListItem>Convert between Angular and AngularJS</ListItem>
                <ListItem>Better interopability</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading size={1} lineHeight={1} fit caps>
            ng-metadata Upgrade Path
          </Heading>
          <Layout>
            <Fill>
              <Heading size={3} lineHeight={1}>
                Disadvantages
              </Heading>
              <List>
                <ListItem>Large build sizes</ListItem>
                <ListItem>Configuration</ListItem>
              </List>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Layout>
            <Fill>
              <Image src={images.yoDawg} />
            </Fill>
          </Layout>
        </Slide>
        <CodeSlide
            transition={[]}
            lang="js"
            code={require("raw-loader!../assets/ng-upgrade.ts")}
            ranges={[
              { loc: [0, 270], title: "ng-upgrade code sample" },
              { loc: [0, 9], note: "Create the upgradeAdapter" },
              { loc: [0, 29], note: "Bootstrap AngularJS App module" },
              { loc: [0, 44], note: "Downgrade Angular component" },
              { loc: [0, 48], note: "Upgrade AngularJS component" }
            ]} />
        <Slide transition={["zoom", "slide"]} transitionDuration={500}>
          <Heading size={1} lineHeight={1} caps>
            Questions?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
