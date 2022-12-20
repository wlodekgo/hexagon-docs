# How Hexagon works

The distribution of ETH rewards transferred by the Golem Foundation to Hexagon will be determined through an iterative process repeated over periods called epochs. Currently, the length of a Hexagon epoch is set to 90 days, but this may change in the future.

Before an epoch starts, members of the Hexagon community will discuss and vote on the list of potential donation recipients chosen from a list of eligible public goods projects maintained by the Golem Foundation (To read more on the eligibility criteria and how you can submit a project, see section [Propose a project]()).

Each user will also have to decide how much GLM to stake in the upcoming epoch. Those wishing to have a say in how the ETH transferred by the Golem Foundation to Hexagon is going to be distributed will have to time-lock at least 100 GLM into the Hexagon contract (lower stakes are possible but will not confer any rewards or governance power to a user). Higher stakes will result in higher rewards and more voting power in token-weighted polls.

Users who want to receive ETH rewards have to keep their GLM staked throughout the epoch. If they withdraw their GLM before the epoch ends they will not be able to claim any rewards or donate their part of the staking proceeds to eligible causes.

At the beginning of the epoch, the amount of ETH rewards to be turned over to the Hexagon community for distribution will be determined based on the fraction of the entire GLM supply staked by Hexagon users in the previous epoch. We call this amount the Total Rewards (or TR for short).

Every community member who staked at least 100 GLM in the previous epoch, and did not withdraw their tokens from the Hexagon contract before the epoch ended, will be eligible to claim User Rewards (UR) during the subsequent epoch. A User Reward will be calculated proportionally to the amount of GLM staked by a user in the previous epoch (the more GLM you staked, the higher your UR).

At the beginning of each epoch community members with valid stakes will have a two-week decision window to determine what they want to do with their User Rewards. They can choose between claiming the rewards for themselves or donating it in full or in part to one or more eligible causes.

If a user decides to donate at least some part of their User Rewards to a community-selected project, the impact of their donations will be magnified through Hexagon’s Matching Rewards (MR). The MR is going to be determined as a function of the amount of GLM staked by a user, and the proportion of the User Rewards they donated to eligible projects.

Once this decision window is closed community members who decided to keep their rewards will be able to withdraw their share of the ETH rewards into their wallets, and the matched donations will be distributed among projects that reached a predetermined threshold of community contributions. In the MVP stage, this threshold has been tentatively set as the quotient of one by the number of donation recipients in a given epoch.

The rewards that were neither claimed nor allocated by users, as well as all donations below the threshold, will be transferred back to the Golem Foundation.

To find out more about how this mechanism is implemented in the Hexagon App, and how you can participate in the project, read the [Using the App]() section.

To read more about the math we are using to calculate Total Rewards, User Rewards, and Matched Rewards, read Hexagon’s [Technical Outline]().
