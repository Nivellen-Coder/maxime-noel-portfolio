import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

import {
  Button,
  Heading,
  Input,
  Label,
  Text,
  Textarea,
  Field
} from '@nova/ui';

import { HelperText } from '@nova/ui';
import { ErrorText } from '@nova/ui';

@Component({
  selector: 'app-nova-test',
  standalone: true,
  imports: [
    Button,
    Heading,
    Text,
    Input,
    Textarea,
    Field,
    Label,
    HelperText,
    ErrorText
  ],
  templateUrl: './nova-test.html',
  styleUrl: './nova-test.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NovaTest {}
