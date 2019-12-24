import { Model } from "sequelize";

class Lead extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public phoneNumber!: string;
  public alternativePhoneNumber!: string;
  public email!: string;

  // timestamp
  public readonly createAt!: Date;
  public readonly updatedAt!: Date;
}

export default Lead;
