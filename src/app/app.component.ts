
import { RouterOutlet } from '@angular/router';
import { ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { SelectionModel } from '@angular/cdk/collections';
import { BehaviorSubject, filter } from 'rxjs';
import { FormControl, FormsModule } from '@angular/forms';
import * as events from 'events';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { MatIconAnchor, MatIconButton } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

export interface data {
  id: string
  name: string
  parentId: string
  active: boolean
}


export interface ScreensModule {
  id: string
  name: string
  parentId: string
  active: boolean
  isChecked: false
  privileges: PrivilegeState;
  totalPrivileges: number
}
export interface CrudNode {
  name: string
  id: string
  active: boolean
  parentId: string
  create: false
  read: false
  update: false
  delete: false
  totalPrivilege: number
}
interface PrivilegeState {
  create: boolean,
  read: boolean,
  update: boolean,
  delete: boolean
}
interface FlatNode {
  expandable: boolean;
  id: string;
  name: string;
  parentId: string | null;
  active?: boolean;
  level: number;
}






export interface TreeNodes {
  id: string;
  name: string;
  parentId: string | null;
  active?: boolean;
  isChecked: boolean
  children?: TreeNodes[];
  privileges: PrivilegeState;
  totalPrivileges: number
}

interface FlatNode {
  expandable: boolean;
  id: string;
  name: string;
  parentId: string | null;
  active?: boolean;
  level: number;
}



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTableModule, MatIconModule, MatIconButton, CommonModule, FormsModule, MatCheckbox, MatIconAnchor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  check: boolean = true;
  backendData: TreeNodes[] =
    [

      {
        "id": "USER-USER-001", "name": "User", "parentId": "USER-MOD-001", "active": true, "isChecked": null, "privileges": {
          "create": false,
          "read": false,
          "update": false,
          "delete": false
        }, "children": null, "totalPrivileges": null
      },
      {
        "id": "USER-ROLE-002", "name": "Role", "parentId": "USER-MOD-001", "active": true, "isChecked": null, "privileges": {
          "create": false,
          "read": false,
          "update": false,
          "delete": false
        }, "children": null, "totalPrivileges": null
      },
      {
        "id": "USER-AUDIT-003", "name": "Audit Log", "parentId": "USER-MOD-001", "active": true, "isChecked": null, "privileges": {
          "create": false,
          "read": false,
          "update": false,
          "delete": false
        }, "children": null, "totalPrivileges": null
      },
      {
        "id": "REPORT-GEN-001", "name": "Report Generation", "parentId": "REPORT-MOD-001", "active": true, "isChecked": null, "privileges": {
          "create": false,
          "read": false,
          "update": false,
          "delete": false
        }, "children": null, "totalPrivileges": null
      },
      {
        "id": "REPORT-COLL-INFO-002", "name": "Collect Information", "parentId": "REPORT-MOD-001", "active": true, "isChecked": null, "privileges": {
          "create": false,
          "read": false,
          "update": false,
          "delete": false
        }, "children": null, "totalPrivileges": null
      },
      {
        "id": "REPORT-REG-TRN-003", "name": "Registration Transaction", "parentId": "REPORT-MOD-001", "active": true, "isChecked": null, "privileges": {
          "create": false,
          "read": false,
          "update": false,
          "delete": false
        }, "children": null, "totalPrivileges": null
      },
      {
        "id": "REPORT-Auth-TRN-004", "name": "Authentication Transaction", "parentId": "REPORT-MOD-001", "active": true, "isChecked": null, "privileges": {
          "create": false,
          "read": false,
          "update": false,
          "delete": false
        }, "children": null, "totalPrivileges": null
      },
      {
        "id": "CASE-MAN-001", "name": "Manage Case and Assign Case", "parentId": "CASE-MOD-001", "active": true, "isChecked": null, "privileges": {
          "create": false,
          "read": false,
          "update": false,
          "delete": false
        }, "children": null, "totalPrivileges": null
      },
      {
        "id": "CASE-MANUAL-002", "name": "Upload Manual Investigation", "parentId": "CASE-MOD-001", "active": true, "isChecked": null, "privileges": {
          "create": false,
          "read": false,
          "update": false,
          "delete": false
        }, "children": null, "totalPrivileges": null
      },
      {
        "id": "CASE-INC-003", "name": "Incident Report", "parentId": "CASE-MOD-001", "active": true, "isChecked": null, "privileges": {
          "create": false,
          "read": false,
          "update": false,
          "delete": false
        }, "children": null, "totalPrivileges": null
      },
      {
        "id": "BLOCKED-AUTH-001", "name": "Authentication Blocked", "parentId": "BLOCKED-MOD-001", "active": true, "isChecked": null, "privileges": {
          "create": false,
          "read": false,
          "update": false,
          "delete": false
        }, "children": null, "totalPrivileges": null
      },
      {
        "id": "BLOCKED-REG-002", "name": "Registration Blocked", "parentId": "BLOCKED-MOD-001", "active": true, "isChecked": null, "privileges": {
          "create": false,
          "read": false,
          "update": false,
          "delete": false
        }, "children": null, "totalPrivileges": null
      },
      {
        "id": "DHASHBOARD-SUP-001", "name": "Supervisor Dashboard", "parentId": "DHASHBOARD-MOD-001", "active": true, "isChecked": null, "privileges": {
          "create": false,
          "read": false,
          "update": false,
          "delete": false
        }, "children": null, "totalPrivileges": null
      },
      {
        "id": "DHASHBOARD-ANA-001", "name": "Analyst Dashboard", "parentId": "DHASHBOARD-MOD-001", "active": true, "isChecked": null, "privileges": {
          "create": false,
          "read": false,
          "update": false,
          "delete": false
        }, "children": null, "totalPrivileges": null
      },
      {
        "id": "USER-MOD-001", "name": "User Management", "parentId": null, "active": true, "isChecked": null, "privileges": {
          "create": false,
          "read": false,
          "update": false,
          "delete": false
        }, "children": null, "totalPrivileges": null
      },
      {
        "id": "RULE-MOD-001", "name": "Rule Management", "parentId": null, "active": true, "isChecked": null, "privileges": {
          "create": false,
          "read": false,
          "update": false,
          "delete": false
        }, "children": null, "totalPrivileges": null
      },
      {
        "id": "CASE-MOD-001", "name": "Case Management", "parentId": null, "active": true, "isChecked": null, "privileges": {
          "create": false,
          "read": false,
          "update": false,
          "delete": false
        }, "children": null, "totalPrivileges": null
      },
      {
        "id": "REPORT-MOD-001", "name": "Reports", "parentId": null, "active": true, "isChecked": null, "privileges": {
          "create": false,
          "read": false,
          "update": false,
          "delete": false
        }, "children": null, "totalPrivileges": null
      },
      {
        "id": "BLOCKED-MOD-001", "name": "Blocked ID Management", "parentId": null, "active": true, "isChecked": null, "privileges": {
          "create": false,
          "read": false,
          "update": false,
          "delete": false
        }, "children": null, "totalPrivileges": null
      },
      {
        "id": "DHASHBOARD-MOD-001", "name": "Dhashboard Management", "parentId": null, "active": true, "isChecked": null, "privileges": {
          "create": false,
          "read": false,
          "update": false,
          "delete": false
        }, "children": null, "totalPrivileges": null
      }
    ]


  public constructor(private cdr: ChangeDetectorRef, private zone: NgZone) {
    this.dataSource.data = this.screensName;
  }
  get data(): TreeNodes[] { return this.dataChange.value; }
  selectedPrivileges: any[] = [];
  //@ts-ignore
  screensData: ScreensModule[];
  //@ts-ignore
  crudNode: CrudNode[];
  screensName: TreeNodes[] = [];
  dataChange: BehaviorSubject<TreeNodes[]> = new BehaviorSubject<TreeNodes[]>([]);
  displayedColumns: string[] = ['name', 'create', 'read', 'update', 'delete']
  headerPrivilegesState: PrivilegeState = { create: false, read: false, update: false, delete: false };
  interminateState: PrivilegeState = { create: false, read: false, update: false, delete: false };
  defaultPrivilegeState: PrivilegeState = {
    create: false,
    read: false,
    update: false,
    delete: false,
  };
  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    (node: TreeNodes, level: number) => ({
      expandable: node.children && node.children.length > 0,
      name: node.name,
      id: node.id,
      parentId: node.parentId,
      active: node.active,
      children: node.children,
      privileges: { ...node.privileges },
      level,
    }),
    node => node.level,
    node => node.expandable,
    node => node.children
  );
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  selection = new SelectionModel<TreeNodes>(true, []);

  // Recursive function to update privileges for a node and its children
  createFormControl = new FormControl();
  ngOnInit(): void {
    this.fetchDataList()
    this.updateHeaderPrivilegesState()
  }


  updateNodePrivileges(nodes, flag: boolean, field: string) {
    return nodes.map(node => {
      // If the node has children, recursively update their privileges too
      let updatedChildren = node.children ? this.updateNodePrivileges(node.children, flag, field) : [];

      // Update the privilege based on the flag and field
      const updatedPrivileges = {
        ...node.privileges,
        [field]: !flag, // Dynamically set the privilege based on the field and flag
      };

      return {
        ...node, // Spread the rest of the node properties
        privileges: updatedPrivileges,
        children: updatedChildren, // Assign the updated children array
      };
    });
  }

  onHeaderCheckboxChange(event: MatCheckboxChange, flag: boolean, field: string) {
    console.log(flag)
    console.log(this.dataSource)
    console.log(event)
    const updatedData = this.updateNodePrivileges(this.dataSource.data, flag, field);
    switch (field) {
      case 'create': {
        this.headerPrivilegesState.create = !this.headerPrivilegesState.create
        break;
      }
      case 'read': {
        this.headerPrivilegesState.read = !this.headerPrivilegesState.read
        break;
      }
      case 'update': {
        this.headerPrivilegesState.update = !this.headerPrivilegesState.update
        break;
      }
      case 'delete': {
        this.headerPrivilegesState.delete = !this.headerPrivilegesState.delete
        break;
      }
    }
    this.dataSource.data = updatedData;
    console.log(this.dataSource.data)
  }
  togglePrivilege(data: any, field: string) {
    console.log(data)
    if (data.parentId == null) {
      this.dataSource.data.map((map) => {
        if (data.id == map.id) {
          console.log(map.privileges[field])
          map.privileges[field] = !map.privileges[field];

        }
      })
    }
    else {
      this.dataSource.data.map((map) => {
        map.children.map((child) => {
          if (data.id == child.id) {
            child.privileges[field] = !child.privileges[field];
          }
        })
      })
    }
    console.log(this.dataSource.data)
    this.cdr.detectChanges()
    this.interminateStateMethod(field, data.parentId);
  }

  interminateStateMethod(field: string, parentId: string | null) {
    let hasFalsePrivilege: boolean;
    if (parentId == null) {
      hasFalsePrivilege = this.dataSource.data.some(node => node.privileges[field] === false);
    } else {
      const parentNodes = this.dataSource.data.filter(node => node.id === parentId);
      hasFalsePrivilege = parentNodes.some(parentNode =>
        parentNode.children && parentNode.children.some(child => child.privileges[field] === false)
      );
    }
    this.interminateState[field] = hasFalsePrivilege;
  }


  fetchDataList() {
    const filteredData = this.screensName = this.backendData.filter(value => value.parentId === null)
      .map(parentScreen => this.createTreeNode(parentScreen));
    this.dataSource.data = this.screensName;
    console.log('list', this.screensData);
    console.log('FilteredData', filteredData);
    console.log('DataSource', this.dataSource.data);
  }

  createTreeNode(parentScreen: TreeNodes): TreeNodes {
    const children = this.backendData
      .filter(screen => screen.parentId === parentScreen.id)
      .map(childScreen => this.createTreeNode(childScreen));
    return {
      id: parentScreen.id,
      name: parentScreen.name,
      parentId: parentScreen.parentId,
      active: parentScreen.active,
      children,
      isChecked: parentScreen.isChecked,
      privileges: { ...parentScreen.privileges },
      totalPrivileges: parentScreen.totalPrivileges,
    };
  }
  crud(node: TreeNodes) {
    return [
      { create: node.privileges.create || false, value: node.privileges.create ? 1 : 0 },
      { read: node.privileges.read || false, value: node.privileges.read ? 4 : 0 },
      { update: node.privileges.update || false, value: node.privileges.update ? 7 : 0 },
      { delete: node.privileges.delete || false, value: node.privileges.delete ? 9 : 0 },
    ];
  }
  updatePrivileges(node: TreeNodes): PrivilegeState {
    return {
      create: node.privileges.create,
      read: node.privileges.read,
      update: node.privileges.update,
      delete: node.privileges.delete
    };
  }

  isSomeSelected(): boolean {
    setTimeout(() => {
      this.cdr.detectChanges(); // Trigger change detection
      console.log(this.selection.selected);
    }, 0);
    return this.selection.selected.length > 0;
  }
  masterToggle(): void {
    this.dataSource.data.forEach(node => {
      if (node.parentId === null) {
        this.toggleNodeCreate(node);
      }
    });
  }

  // Recursive function to update 'create' property for each node in the tree
  toggleNodeCreate(node: TreeNodes): void {
    node.privileges.create = !node.privileges.create;

    if (node.children && node.children.length > 0) {
      node.children.forEach(child => this.toggleNodeCreate(child));
    }
  }


  setCreatePrivilegeForChildren(node: TreeNodes, checked: boolean) {
    node.privileges.create = checked;

    if (node.children && node.children.length > 0) {
      node.children.forEach(child => {
        this.setCreatePrivilegeForChildren(child, checked);
      });
    }
  }

  updateHeaderPrivilegesState() {
    // Update the state based on selected privileges
    const selectedCreatePrivileges = this.dataSource.data.filter(privilege => privilege.children);
    console.log('select', selectedCreatePrivileges)
    if (selectedCreatePrivileges.length === 0) {
      // Reset to default privileges when no "create" item is selected
      this.defaultPrivilegeState.create = false;
    } else {
      // If there are selected "create" privileges, set the header checkbox to true
      this.defaultPrivilegeState.create = true;
    }
  }


}
