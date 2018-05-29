import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const DummyComponent = ({ items }: { items: string[] }) => (
  <List>
    {items.map(item => (
      <ListItem>
        <ListItemText primary={item} />
      </ListItem>
    ))}
  </List>
);

export default DummyComponent;
