# Get Members Action

Returns list of members to the repo the action is running on.

## Inputs

### `token`

**Required** PAT with permissions to repo.

## Outputs

### `members`

List of GH members.

## Example usage

```yaml
uses: ___
with:
  token: 'ABCD...'
```