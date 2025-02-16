import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image, SvgProps } from 'react-native-svg';
const UIA = (props: SvgProps) => (
  <Svg width={56} height={56} viewBox="0 0 56 56" fill="none" {...props}>
    <Path
      d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z"
      fill="url(#pattern0_59183_9499)"
    />
    <Defs>
      <Pattern
        id="pattern0_59183_9499"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use xlinkHref="#image0_59183_9499" transform="scale(0.0025)" />
      </Pattern>
      <Image
        id="image0_59183_9499"
        width={400}
        height={400}
        xlinkHref="data:image/jpeg;base64,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UZJRklGSUZJRklGSTTubL//aAAwDAQACAAMAAAAQkMMMMMMMMMMMMMMMMMMMMMMMYU88888888888888888888888oU88888888888888888888888oU88888888888888888888888oU88888888888888888888888oU88888888888888888888888oU88888888888888888888888oU88888888888888888888888oU888sOaoGe82e842q0888888oU88888o8880888++8a888888oU88888o888U2C88s8o888888oU88888o888UUo888e8W88888oU88888o888UU8888q8K88888oU88888o888UU81lZMU488888oU88840o888UU8WkO8u828888oU88888sy88UU65W88q048888oU8888+O+uO8v8d8888e+8888oU88888888888888888888888oU88888888888888888888888oU88888888888888888888888oU88888888888888888888888oU88888888888888888888888oU88888888888888888888888oU88888888888888888888888oYwwwwwwwwwwwwwwwwwwwwwwwk//EACcRAQABAgQDCQAAAAAAAAAAAAERACExQEGBUXGRYXCAobHB0fDx/9oACAEDAQE/EPCkqhAxWHLtfrFQ5zAIk6Fz8XppIgyw0XAObasGcdXV3alxYS5uHQ9cu8VYndse7tSFwErWqE8tDYjLQngqB81VkrxYChrLgWPl3XvU/8QAIhEAAQMDAwUAAAAAAAAAAAAAAQAQEUBBUSAhcDAxUGGx/9oACAECAQE/EOTZUtKlp0Spqh5E1YpBmWELDBCb0wCFZFPeUZFfZBiwovbiiGA7oYhtpHUh4YjCN8Wt/DfOmFHJ3//EACkQAQABAQYGAwEBAQEAAAAAAAERACExUaGx8RAwQVBh8CBxgZHBQNH/2gAIAQEAAT8QGN0uqt3Vu6t3Vu6t3Vu6t3Vu6t3Vu6t3Vu6t3Vu6t3Vu6t3Vu6t3Vu6t3Vu6t3Vu6t3Vu6t3Vu6t3Vu6t3Vu6t3Vu6t3Vu6t3Vu6t3Vu6t3Vu6t3Vu6t3Vu6t3Vu6ljfDqrPNe45ZrWea9xyzWs817jlmtZ5r3HLNazzXuOWa1nmvccs1rPNe45ZrWea9xyzWs817jlmtZ5r3HLNazzXuOWa1nmvccs1rPNe45ZrWea9xyzWs817jlmtZ5ryRkLIRPmLHEaNHtjAiL+DiqA4XHABXiNGmSiQgeVB8AVgJWhwZAMcZFv5T0EJYFxgH5hZKRz4rB9NOHjIQYogKZIBhEhH/gyzWs815IM8hACC4iJxY+wy9eKsTw1B2hdsNHggB9Cw4M2RIjCONJhCtKdflZvl4x0QIw7Aiy2xESmyKCAKrAHWhz3QQpIbZD7BkLJWjX0/6svMVAV0kLKRCyYR/G5Pg6Exi6ABaqsRQHDADrgi4uqkHwlwemaTM6RfNxfLLwihB7FCUI8/LNazzXk+iwfBBFjBaCX+WP4fJEQgMtyKtaRFERLxq74O5cD4bH78MewpRR/fhMyhPyyGEIkTMC9VDIDblbgot4pGKUIklpxiVn4CnxXCcR057LNazzXk+iwfAWFg/wCifNEJEBH0KgdL8wI5PDEftF7IdtJvDoGROiJxfGb2QIfZJPmN4/CwLHkuZYSsqQdQPBe66eTZ9lxLDy8blOnzwP2LUzAzobz9X9OdlmtZ5ryfRYOWVRe7x8Jl77eknLY7JLGyRgghD9oBfs6PwcCFYVr5lYQ20+7j5Qyqt6/JwYm0sbRcYMPIoRBERtE42QyzFlqryw/Q52Wa1nmvJ9Fg5ZVF7vHRZL4kAECLmb7xupv5KzpJPqnC2EZIFfMH9QpzfYqpMRZYlEsA2EJ8+s+gyxgmKjOK8RMmrO0sMwlJeFQUgiWI9OblmtZ5ryfRYOWVRe7x8EqrNjk4leVgW20nl+gXzumG1sAQGEv7/A6E6BBOoYAEYBzcs1rPNeT6LByyqL3ePh63DxJCUBiJf7876czsUmHwxD4ak3wusIT5tt43hJYWqCXGD9TmmWa1nmvJ9Fg5ZVF7vHw9bh4++x8jpUtW1d+yCPBxXX5naKJPJMnkqL3C6SlHiyzmZZrWea8n0WDllUXu8fD1uHj77HyMTNDYCJMIFvoT8L7s0FgJ/dry8xlmtZ5ryfRYOWVRe7x8PW4ePvsfG77xZP7Q02eJ/wDatmFswxFc8xDRMDl8/wDhSqHJ6i8hD7EmC0zZEgwjjQLTI+nTukonhONtHCItgMf6cdUOZlmtZ5ryfRYOWVRe7x8PW4ePvsdIkVAGr4q9plTLeP8ATlQAAAsA6VbGEqAhYdbRF9qtiOCqRJiHe8Wg4jh42OBufoDPH24v0IdIhCJhR5gyvZpfs5eWa1nmvJso+g5ZVF7vHw9bh4++x0axMX9E/b/5hwL+oCVNwVIwZgQlgnotftPoQCBpV/KB6bBbJPubV5OKPDPL0rrCJ5CgCCEiMicbKFwiy2d8pD88vLNazzXk3Q6H2NMjKDiJJrxcbp/Ev+fNF7vHw9bh4ucTpQLYYm+JUYKgAAACwDgJMkuwiRrOMBoUZ3NGBL+kDzU+cKFCbIbALwqTaqhHw6korLGCfKk8rxGbXs7bqMJT8KkRRIS85WWa1nmvKNJb/t6l5Wf7xWSLJKsX6g4kpl8GZtE+Hu8fAiGY/mh/nFlOUEEKzbYgWPDiYVZyNi7XKM/nZnzk9JUPtJ+nwuCTgglVDwJcplmtZ5ryjmWAoAD7gE8svHwjw7MsS9WWZSssbpbzriyMDZnQYlsGaKlQf3sxYwToLVq/D3ePhCdaYhHtt4KIgtAC1V6FKHM+KQhEh0YJ8zweMYxPb0ikCIM9VZfnLShAxFWviReGi0Gx0ZP48Vb2iC1oLzbPAvlZZrWea8obxUATIEtEbZo0HGZDqb7ARwoZbJiM+5SPhKDhCZo/RVfhUdswkmMP8Y+1QeTX89Kwwm1eq1cN9lgqbqi2dQMEFOY/RpIn2Femf7Xpn+0OjBSNAMAMI2yTcjwhC3KBkTC2wEJSTGo/kyJz0tRPimuCmTiRYZXKxJJaMoywvRM/y+knQxhH9bcqt6RYFg4ByZD7p1NI1rJUSUVIRoKUEgZ+1IfCV1mcfo1H0NRChPCKU9k7CVsiudIftycnLNazzXuOWa1nmvccs1rPNe45ZrWea9xyzWs817jlmtZ5r3HLNazzXuOWa1nmvccs1rPNe45ZrWea9xyzWs817jlmtZ5r3HLNazzXuOWa1nmvccs1rPNe45ZrWea9xyzWlrfLqrd1burd1burd1burd1burd1burd1burd1burd1burd1burd1burd1burd1burd1burd1burd1burd1burd1burd1burd1burd1burd1burd1burd1burd1buoa3Q6q//9k="
      />
    </Defs>
  </Svg>
);
export default UIA;
