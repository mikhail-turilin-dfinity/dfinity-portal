// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorials: [
    "tutorials/create_first_dapp",
    "tutorials/cycles-faucet",
    "tutorials/local-quickstart",
    "tutorials/network-quickstart",
  ],
  "developer-docs": [
    // "developer-docs/ic-overview",

    {
      type: "category",
      label: "Building on the IC",
      link: {
        type: "doc",
        id: "developer-docs/build/index",
      },
      items: [
        "developer-docs/build/install-upgrade-remove",
        {
          type: "category",
          label: "Project Setup",
          link: {
            // type: 'doc', id: 'developer-docs/build/project-setup/index',
            type: "doc",
            id: "developer-docs/build/project-setup/index",
          },
          items: [
            "developer-docs/build/project-setup/design-dapps",
            "developer-docs/build/project-setup/manage-projects",
            "developer-docs/build/project-setup/manage-canisters",
            "developer-docs/build/project-setup/cycles-wallet",
          ],
        },
        {
          type: "category",
          label: "Agents",
          link: {
            type: "doc",
            id: "developer-docs/build/agents/index",
          },
          items: [
            {
              type: "category",
              label: "JavaScript Agent by DFINITY",
              link: {
                type: "doc",
                id: "developer-docs/build/agents/javascript/javascript-intro",
              },
              items: [
                "developer-docs/build/agents/javascript/javascript-intro",
                "developer-docs/build/agents/javascript/nodejs",
              ],
            },
            "developer-docs/build/agents/ic-agent-dfinity",
          ],
        },
        {
          type: "category",
          label: "Canister Development Kits",
          link: {
            type: "doc",
            id: "developer-docs/build/cdks/index",
          },
          items: [
            {
              type: "category",
              label: "cdk-rs by DFINITY (Rust)",
              link: {
                type: "doc",
                id: "developer-docs/build/cdks/cdk-rs-dfinity/index",
              },
              items: [
                "developer-docs/build/cdks/cdk-rs-dfinity/rust-quickstart",
                "developer-docs/build/cdks/cdk-rs-dfinity/rust-profile",
                "developer-docs/build/cdks/cdk-rs-dfinity/rust-counter",
                "developer-docs/build/cdks/cdk-rs-dfinity/rust-optimize",
                "developer-docs/build/cdks/cdk-rs-dfinity/multiply-dependency",
              ],
            },
            "developer-docs/build/cdks/clang-supported-languages",
            "developer-docs/build/cdks/azle-demergent-labs",
          ],
        },
        {
          type: "category",
          label: "Backend Tutorials",
          link: {
            type: "doc",
            id: "developer-docs/build/backend/index",
          },
          items: [
            "developer-docs/build/backend/explore-templates",
            "developer-docs/build/backend/define-an-actor",
            "developer-docs/build/backend/hello-location",
            "developer-docs/build/backend/counter-tutorial",
            "developer-docs/build/backend/calculator",
            "developer-docs/build/backend/phonebook",
            "developer-docs/build/backend/multiple-actors",
            "developer-docs/build/backend/intercanister-calls",
            "developer-docs/build/backend/access-control",
            "developer-docs/build/backend/simple-cycles",
            "developer-docs/build/backend/reproducible-builds",
            "developer-docs/build/backend/candid-ui",
          ],
        },
        {
          type: "category",
          label: "Frontend Tutorials",
          link: {
            // type: 'doc', id: 'developer-docs/build/frontend/index',
            type: "doc",
            id: "developer-docs/build/frontend/webpack-config",
          },
          items: [
            "developer-docs/build/frontend/webpack-config",
            "developer-docs/build/frontend/custom-frontend",
          ],
        },
        {
          type: "category",
          label: "Candid",
          link: {
            type: "doc",
            id: "developer-docs/build/candid/candid-intro",
          },
          items: [
            "developer-docs/build/candid/candid-concepts",
            "developer-docs/build/candid/candid-howto",
          ],
        },
        "developer-docs/build/troubleshooting",
      ],
    },
    {
      type: "category",
      label: "Deployment & Scaling",
      link: {
        type: "doc",
        id: "developer-docs/deploy/index",
      },
      items: [
        "developer-docs/deploy/deploying-and-upgrading",
        "developer-docs/deploy/larger-wasm",
        "developer-docs/deploy/staging-environment",
        "developer-docs/deploy/custom-domain",
        "developer-docs/deploy/computation-and-storage-costs",
        // 'developer-docs/deploy/advanced-deployment'
      ],
    },
    {
      type: "category",
      label: "Advanced Features",
      link: {
        type: "doc",
        id: "developer-docs/integrations/index",
      },
      items: [
        {
          type: 'category',
          label: 'Service Nervous System (SNS)',
          link: {
            type: "doc",
            id: "developer-docs/integrations/sns/index",
          },
          items: [
            "developer-docs/integrations/sns/sns-intro",
            {
              type: 'category',
              label: 'Get an SNS',
              link: {
                type: "doc",
                id: "developer-docs/integrations/sns/get-sns/get-sns-intro",
              },
              items: [
                "developer-docs/integrations/sns/get-sns/preparation",
                "developer-docs/integrations/sns/get-sns/local-testing"
                //                "developer-docs/integrations/sns/get-sns/get-sns-production"
              ],
            },
            {
              type: 'category',
              label: 'Integrate with an SNS',
              link: {
                type: "doc",
                id: "developer-docs/integrations/sns/integrate-sns/ledger-integration",
              },
              items: [
                "developer-docs/integrations/sns/integrate-sns/index-integration",
                "developer-docs/integrations/sns/integrate-sns/ledger-integration"
                //                "developer-docs/integrations/sns/integrate-sns/frontend-integration"
              ],
            },
            {
              type: 'category',
              label: 'Manage an SNS',
              link: {
                type: "doc",
                id: "developer-docs/integrations/sns/managing-sns/manage-sns-intro",
              },
              items: [
                "developer-docs/integrations/sns/managing-sns/cycles-usage"
                //            "developer-docs/integrations/sns/managing-sns/nervous-system-parameters",
                //            "developer-docs/integrations/sns/managing-sns/proposal-guide",
                //            "developer-docs/integrations/sns/managing-sns/upgradeSNS"
              ]
            }
          ],
        },
        {
          type: "category",
          label: "Bitcoin Integration",
          link: {
            type: "doc",
            id: "developer-docs/integrations/bitcoin/index",
          },
          items: [
            "developer-docs/integrations/bitcoin/bitcoin-how-it-works",
            "developer-docs/integrations/bitcoin/local-development",
          ],
        },
        {
          type: "category",
          label: "Threshold ECDSA",
          link: {
            type: "doc",
            id: "developer-docs/integrations/t-ecdsa/index",
          },
          items: ["developer-docs/integrations/t-ecdsa/t-ecdsa-how-it-works"],
        },
        {
          type: "category",
          label: "HTTPS Outcalls",
          link: {
            type: "doc",
            id: "developer-docs/integrations/http_requests/index",
          },
          items: [
            "developer-docs/integrations/http_requests/http_requests-how-it-works",
          ],
        },
        {
          type: "category",
          label: "Internet Identity",
          link: {
            type: "doc",
            id: "developer-docs/integrations/internet-identity/integrate-identity",
          },
          items: [
            "developer-docs/integrations/internet-identity/alternative-origins",
          ],
        },
        {
          type: "category",
          label: "ICP Ledger",
          link: {
            type: "doc",
            id: "developer-docs/integrations/ledger/index",
          },
          items: [
            "developer-docs/integrations/ledger/interact-with-ledger",
            "developer-docs/integrations/ledger/ledger-local-setup",
            "developer-docs/integrations/ledger/deploy-new-token",
          ],
        },
        {
          type: "category",
          label: "Rosetta",
          link: {
            type: "doc",
            id: "developer-docs/integrations/rosetta/index",
          },
          items: [
            "developer-docs/integrations/rosetta/transfers",
            "developer-docs/integrations/rosetta/neuron-lifecycle",
            "developer-docs/integrations/rosetta/staking-support",
            "developer-docs/integrations/rosetta/staking-tutorial",
            "developer-docs/integrations/rosetta/hotkeys",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Best Practices",
      link: {
        type: "doc",
        id: "developer-docs/best-practices/index",
      },
      items: [
        "developer-docs/best-practices/considerations-for-nft-devs",

        {
          type: "category",
          label: "Security Best Practices",
          link: {
            type: "doc",
            id: "developer-docs/best-practices/security/index",
          },
          items: [
            "developer-docs/best-practices/security/general-security-best-practices",
            "developer-docs/best-practices/security/web-app-development-security-best-practices",
            "developer-docs/best-practices/security/rust-canister-development-security-best-practices",
          ],
        },

      ]
    },
    // {
    //   type: "category",
    //   label: "Updates & Releases",
    //   link: {
    //     // type: 'doc', id: 'developer-docs/updates/index'
    //     type: "doc",
    //     id: "developer-docs/updates/release-notes/sdk-release-notes",
    //   },
    //   items: [
    //     {
    //       type: "category",
    //       label: "SDK Release Notes",
    //       link: {
    //         type: "doc",
    //         id: "developer-docs/updates/release-notes/sdk-release-notes",
    //       },
    //       items: ["developer-docs/updates/release-notes/release-notes"],
    //     },
    //   ],
    // },
  ],
  references: [
    "references/index",
    {
      type: "category",
      label: "Internet Computer Spec",
      items: [
        "references/ic-interface-spec",
        "references/id-encoding-spec",
      ]
    },
    {
      type: "category",
      label: "Internet Computer SDK",
      items: [
        {
          type: "category",
          label: "dfx command line tool",
          link: {
            type: "doc",
            id: "references/cli-reference/index",
          },
          items: [
            "references/cli-reference/dfx-parent",
            "references/cli-reference/dfx-bootstrap",
            "references/cli-reference/dfx-build",
            "references/cli-reference/dfx-cache",
            "references/cli-reference/dfx-canister",
            "references/cli-reference/dfx-deploy",
            "references/cli-reference/dfx-generate",
            "references/cli-reference/dfx-help",
            "references/cli-reference/dfx-identity",
            "references/cli-reference/dfx-ledger",
            "references/cli-reference/dfx-new",
            "references/cli-reference/dfx-ping",
            "references/cli-reference/dfx-replica",
            "references/cli-reference/dfx-start",
            "references/cli-reference/dfx-stop",
            "references/cli-reference/dfx-upgrade",
            "references/cli-reference/dfx-wallet",
            "references/cli-reference/dfx-envars",
          ],
        },
        {
          type: "category",
          label: "quill command line tool",
          link: {
            type: "doc",
            id: "references/quill-cli-reference/index",
          },
          items: [
            "references/quill-cli-reference/quill-parent",
            "references/quill-cli-reference/quill-account-balance",
            "references/quill-cli-reference/quill-claim-neurons",
            "references/quill-cli-reference/quill-generate",
            "references/quill-cli-reference/quill-get-neuron-info",
            "references/quill-cli-reference/quill-get-proposal-info",
            "references/quill-cli-reference/quill-list-neurons",
            "references/quill-cli-reference/quill-list-proposals",
            "references/quill-cli-reference/quill-neuron-manage",
            "references/quill-cli-reference/quill-neuron-stake",
            "references/quill-cli-reference/quill-public-ids",
            "references/quill-cli-reference/quill-qr-code",
            "references/quill-cli-reference/quill-replace-node-provider-id",
            "references/quill-cli-reference/quill-scanner-qr-code",
            "references/quill-cli-reference/quill-send",
            "references/quill-cli-reference/quill-transfer",
            "references/quill-cli-reference/quill-update-node-provider",
          ],
        },
        {
          type: "doc",
          label: "dfx.json schema",
          id: "references/dfx-json-reference",
        },
      ]
    },
    {
      type: "category",
      label: "Languages",
      items: [
        {
          type: "link",
          label: "Motoko Base Library",
          href: "/docs/current/motoko/main/base/",
        },
        {
          type: "link",
          label: "Rust CDK References",
          href: "https://docs.rs/ic-cdk/",
        },
        "references/candid-ref",
      ]
    },
    // {
    //   type: 'link',
    //   label: 'SNS References',
    //   href: 'https://docs.rs/ic-sns/',
    // },
    {
      type: "category",
      label: "Core Services",
      items: [
        {
          type: "doc",
          label: "Ledger canister",
          id: "references/ledger",
        },
        {
          type: "doc",
          label: "Internet Identity",
          id: "references/ii-spec",
        },
      ]
    },

    "references/glossary",

  ],
  concepts: [
    "concepts/index",
    "concepts/what-is-IC",
    "concepts/nodes-subnets",
    "concepts/data-centers",
    "concepts/canisters-code",
    "concepts/trust-in-canisters",
    "concepts/tokens-cycles",
    "concepts/governance",
  ],
  motoko: [
    {
      type: "category",
      label: "Motoko Language Tour",
      // link: {
      //   type: "doc",
      //   id: "motoko/main/about-this-guide",
      // },
      items: [
        {
          type: 'autogenerated',
          dirName: 'motoko/intro', // Generate sidebar slice from docs/tutorials/easy
        }]
    },
    {
      type: "category",
      label: "Motoko Developer Guide",
      link: {
        type: "doc",
        id: "motoko/main/about-this-guide",
      },
      items: [
        // "motoko/main/about-this-guide",
        "motoko/main/motoko-introduction",
        "motoko/main/basic-concepts",
        "motoko/main/base-intro",
        "motoko/main/mutable-state",
        "motoko/main/local-objects-classes",
        "motoko/main/actors-async",
        "motoko/main/errors",
        "motoko/main/pattern-matching",
        "motoko/main/sharing",
        "motoko/main/message-inspection",
        "motoko/main/modules-and-imports",
        "motoko/main/control-flow",
        "motoko/main/structural-equality",
        "motoko/main/actor-classes",
        "motoko/main/caller-id",
        "motoko/main/cycles",
        "motoko/main/upgrades",
        "motoko/main/compatibility",
        "motoko/main/stablememory",
        "motoko/main/heartbeats",
        "motoko/main/language-manual",
        "motoko/main/compiler-ref",
        "motoko/main/motoko-grammar",
        "motoko/main/overview",
        "motoko/main/style",
      ]
    },
    {
      type: "category",
      label: "Motoko Base Library Reference",
      link: {
        type: "doc",
        id: "motoko/main/base/index",
      },
      items: [
        "motoko/main/base/Array",
        "motoko/main/base/AssocList",
        "motoko/main/base/Blob",
        "motoko/main/base/Bool",
        "motoko/main/base/Buffer",
        "motoko/main/base/CertifiedData",
        "motoko/main/base/Char",
        "motoko/main/base/Debug",
        "motoko/main/base/Deque",
        "motoko/main/base/Error",
        "motoko/main/base/ExperimentalCycles",
        "motoko/main/base/ExperimentalInternetComputer",
        "motoko/main/base/ExperimentalStableMemory",
        "motoko/main/base/Float",
        "motoko/main/base/Func",
        "motoko/main/base/Hash",
        "motoko/main/base/HashMap",
        "motoko/main/base/Heap",
        "motoko/main/base/Int",
        "motoko/main/base/Int8",
        "motoko/main/base/Int16",
        "motoko/main/base/Int32",
        "motoko/main/base/Int64",
        "motoko/main/base/Iter",
        "motoko/main/base/IterType",
        "motoko/main/base/List",
        "motoko/main/base/Nat",
        "motoko/main/base/Nat8",
        "motoko/main/base/Nat16",
        "motoko/main/base/Nat32",
        "motoko/main/base/Nat64",
        "motoko/main/base/Option",
        "motoko/main/base/Order",
        "motoko/main/base/Prelude",
        "motoko/main/base/Principal",
        "motoko/main/base/Random",
        "motoko/main/base/RBTree",
        "motoko/main/base/Result",
        "motoko/main/base/Stack",
        "motoko/main/base/Text",
        "motoko/main/base/Time",
        "motoko/main/base/Trie",
        "motoko/main/base/TrieMap",
        "motoko/main/base/TrieSet",
      ],
    },
  ],
  tokenomics: [
    "tokenomics/index",
    {
      type: "category",
      label: "Network Nervous System",
      link: {
        type: "doc",
        id: "tokenomics/nns/nns-intro",
      },
      items: [
        "tokenomics/nns/nns-staking-voting-rewards",
        "tokenomics/nns/community-fund",
      ],
    },
    {
      type: "category",
      label: "Service Nervous System",
      link: {
        type: "doc",
        id: "tokenomics/sns/sns-intro-tokens",
      },
      items: [
        "tokenomics/sns/predeployment-considerations",
        "tokenomics/sns/tokenomics",
        "tokenomics/sns/rewards",
      ],
    },
    {
      type: "category",
      label: "Identity & Authentication",
      link: {
        type: "doc",
        id: "tokenomics/identity-auth/what-is-ic-identity",
      },
      items: [
        "tokenomics/identity-auth/auth-how-to",
        "tokenomics/identity-auth/hello-guide",
      ],
    },
    {
      type: "category",
      label: "Token Holders",
      link: {
        // type: 'doc', id: 'tokenomics/token-holders/index'
        type: "doc",
        id: "tokenomics/token-holders/custody-options-intro",
      },
      items: [
        "tokenomics/token-holders/self-custody-quickstart",
        "tokenomics/token-holders/nns-app-quickstart",
        // 'tokenomics/token-holders/seed-donations',
      ],
    },
  ],

  samples: [
    // 'samples/overview',
    "samples/deploying-your-first-bitcoin-dapp",
    "samples/t-ecdsa-sample",
    "samples/http-requests-exchange-rates",
    "samples/hello",
    "samples/host-a-website",
    "samples/dex",
    "samples/nft",
    "samples/dao",
    "samples/encrypted-notes",
    "samples/token-transfer",
    "samples/host-a-webgame",
    "samples/hackathon-projects",
  ],
};

module.exports = sidebars;
