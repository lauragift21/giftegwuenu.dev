workflow "PR Label" {
  resolves = ["PR Labeler"]
  on = "push"
}

action "PR Labeler" {
  uses = "TimonVS/pr-labeler-action@v1.0.0"
}
