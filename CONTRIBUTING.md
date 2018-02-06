# Contributing

If you are interested in contributing to this repository, please create an issue that proposes your changes as specifically as possible.
Once the changes are discussed, the issue will be assigned to you.

Once you are assigned an issue:

* Fork this repository (if you havent already).

* When you have it on your local machine, point your remote branch to the upstream react-radar-chart repo.
```
git remote add upstream https://github.com/vanleuvenze/react-radar-chart.git
```

* Make sure your local master is up to date with upstream master.
```
git pull --rebase upstream master
```

* Create a branch with a name that reflects your intended changes.
```
git checkout -b some_changes
```

* Once you have made your updates, make sure to lint your code and fix any of the warnings.
```
npm run lint
```

* When everything looks good, rebase your feature branch with upstream master.
```
git pull --rebase upstream master
```

* Push it up to your fork.
```
git push origin some_changes
```

* Create a pull request!
